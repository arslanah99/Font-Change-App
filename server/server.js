const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const port = 6969;

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("change font", (font) => {
    console.log("font was changed to:", font);
    io.sockets.emit("change font", font);
  });

  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
});

server.listen(port, () => {
  console.log("server is running on port ", port);
});
