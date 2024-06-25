const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Define the port
const PORT = process.env.PORT || 8181;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));

// Set up middleware to add headers
app.use((req, res, next) => {
  res.setHeader('X-Server-Name', 'My Socket.io Server');
  next();
});

// Serve index.html file on root request
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Emit an event to all clients about the number of connected users
  io.emit('connectedUsers', io.engine.clientsCount);

  socket.on('disconnect', () => {
    console.log('User disconnected');
    // Emit an event to all clients about the number of connected users
    io.emit('connectedUsers', io.engine.clientsCount);
  });
});

server.listen(8181, () => {
  console.log(`Server running on port ${8181}, go to http://localhost:${8181} in your browser and enjoy!`);
});
