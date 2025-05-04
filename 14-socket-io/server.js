const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const PORT = 3000;
const app = express();

const server = http.createServer(app);

// this is where socket.io hooks in
//"This helps the server not send a response immediately or close the connection after responding"
const io = socketIo(server);

//it tell to read the folder
app.use(express.static("public"));

// A Set is like a special array with:
// No duplicates
// Fast lookups
// Special methods like add, has, delete
const users = new Set();

//This sets up an event listener on the Socket.IO server. It listens for a new connection event (when a client connects to the server).
io.on("connection", (socket) => {
  console.log("a user is now connected");

  //handel user when they were joined
  socket.on("Join", (username) => {
    users.add(username);

    //broadcast to all that user is joinde
    io.emit("userJoined", username);
    console.log("users with out array.from", users);

    //send the updated user list to all lient

    io.emit("userList", Array.from(username));
  });
});

server.listen(PORT, () => {
  console.log("connected to the port 3000");
});
