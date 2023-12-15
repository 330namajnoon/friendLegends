const http = require("http");
const express = require("express");
const path = require("path");
const port = 4000;
const app = express();
const pdp = path.join(__dirname, "./public");
app.use(express.static(pdp));
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { exec } = require("child_process");

server.listen(port, () => {
  console.log(`server is up on port ${port}! `);
  exec("webpack --mode development", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar el comando: ${error.message}`);
      return;
    }

    // Resultado exitoso
    console.log(`Resultado: ${stdout}`);
    console.error(`Errores: ${stderr}`);
  });
});

io.on("connection", (client) => {
  console.log("new connect");

  client.on(`walk_right`, (name) => {
    io.emit(`walk_right_${name}`);
  });
  client.on(`walk_left`, (name) => {
    io.emit(`walk_left_${name}`);
  });
  client.on(`walk_stop`, (name, x) => {
    io.emit(`walk_stop_${name}`, x);
  });
  client.on(`run`, (name) => {
    io.emit(`run_${name}`);
  });
  client.on(`run_stop`, (name) => {
    io.emit(`run_stop_${name}`);
  });
  client.on(`jump`, (name) => {
    io.emit(`jump_${name}`);
  });
  client.on("disconnect", () => {
    console.log(`new desconnect ${client.id}`);
  });
});
