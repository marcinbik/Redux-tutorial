const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const router = require("./router");



const PORT = process.env.PORT || 5000;


const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connect", (socket) => {
  console.log("We heve a new connection!");

  

   
});



server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));