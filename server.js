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
    client.on("walk_right",()=> {
        io.emit("walk_right");
    })
    client.on("walk_left",()=> {
        io.emit("walk_left");
    })
    client.on("walk_stop_right",()=> {
        io.emit("walk_stop_right");
    })
    client.on("walk_stop_left",()=> {
        io.emit("walk_stop_left");
    })


    client.on("disconnect",()=> {
        console.log(`new desconnect ${client.id}`);
    })
})