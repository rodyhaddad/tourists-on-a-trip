
NeighborhoodHandler.annotations = [
	new angular.Injectable()
];
NeighborhoodHandler.parameters = [[SocketHandler]];
function NeighborhoodHandler(socketHandler) {
	this.neighborhoods = [];
	this.socketHandler = socketHandler;
	
	var that = this;
	this.socketHandler.onUpdateNeighboorhood(function(name, amount) {
		var neighborhood = that.neighborhoods.filter(function(n) {
			return n.name === name;
		})[0];
		
		if (neighborhood) {
			neighborhood.setTTAmount(amount);
		}
	});
}

NeighborhoodHandler.prototype.pushNeighboorhood = function() {
	this.neighborhoods.push.apply(
		this.neighborhoods,
		Array.prototype.slice.call(arguments).map(function(name) {
			return new Neighborhood(name)
		})
	);
}
	
NeighborhoodHandler.prototype.updateNeighborhood = function(neighborhood, amount) {
	neighborhood.setTTAmount(amount);
	this.socketHandler.updateNeighborhood(neighborhood.name, amount);
}