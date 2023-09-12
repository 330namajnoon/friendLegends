const http = require("http");
const express = require("express");
const path = require("path");
const port = 4000;
const app = express();
const pdp = path.join(__dirname,"./");
app.use(express.static(pdp));
const server = http.createServer(app);
server.listen(port,()=> {
    console.log(`server is up on port ${port}! `);
})
