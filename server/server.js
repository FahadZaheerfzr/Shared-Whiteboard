const express = require('express')
const app = express()
const server = require('http').createServer(app)

const io = require('socket.io')(server, {
      cors: {
        origin: '*',
      }
});
 

io.on('connection', (socket) => {
      console.log('a user connected');
      socket.on('canvas-data', (data)=> {
            socket.broadcast.emit('canvas-data', data);         
      })
});

server.listen(8000);