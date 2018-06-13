
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
io.on('connection', function(socket){
	var currentUser;
	socket.on('beep', function(){
		socket.emit('boop');
		console.log("Received beep");
	});

	socket.on('MESSENGER', function(messenger){

		console.log("Received " + messenger.messenger);
		socket.emit('Mensage',messenger);
		socket.broadcast.emit('Mensage',messenger);
	});

})

http.listen(process.env.PORT || 3000,function(){
console.log('litening on port 3000');
});


console.log("--Server is runing--");




