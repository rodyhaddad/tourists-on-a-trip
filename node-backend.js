var io = require('socket.io')(9898);

io.on('connection', function (socket) {
	socket.on('updateNeighborhoods', function (neighborshoods) {
		socket.broadcast.emit('updateNeighborhoods', neighborshoods);
	});
});