const http = require("http");
const express = require("express");
const path = require("path");
const port = 4000;
const app = express();
const pdp = path.join(__dirname,"./");
app.use(express.static(pdp));
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

server.listen(port,()=> {
    console.log(`server is up on port ${port}! `);
})


io.on("connection",(client)=> {
    console.log("new connect");
    
    client.on("anim",(sina)=> {
        
        io.emit("anim",sina);
    })

    client.on("disconnect",()=> {
        console.log(`new desconnect ${client.id}`);
    })
})