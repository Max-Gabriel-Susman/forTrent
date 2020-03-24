// Back end logic

// imports express module as variable express
var express = require('express');
var socket = require('socket.io');

//App is an instance of express?
var app = express();

// server leverages express's listen method to read requests on port 4000
var server = app.listen(4000, function(){
    console.log('listening to requests on port 4000');
});

// function is a callback function ^^^

// Static files (middleware?)
app.use(express.static('public'));


// Socket setup
var io = socket(server);

// Socket implementation
io.on('connection', function(socket)  {
    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

      // Handle typing event
      socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });



});