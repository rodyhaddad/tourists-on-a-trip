
SocketHandler.annotations = [
	new angular.Injectable()
];
function SocketHandler() {
	this.socket = io.connect('http://localhost:9898');
}

SocketHandler.prototype.updateNeighborhood = function(name, TTAmount) {
	var event = {};
	event[name] = TTAmount;
	this.socket.emit('updateNeighborhoods', event);
}

SocketHandler.prototype.onUpdateNeighboorhood = function(listener) {
	this.socket.on('updateNeighborhoods', function (data) {
		Object.keys(data).forEach(
			function(name) { listener(name, data[name]) } );
	});
}

