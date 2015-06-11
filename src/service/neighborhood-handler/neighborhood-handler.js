
(function () {
	angular.module('tourists-tripping')
		.service('neighborhoodHandler', NeighborhoodHandler);
		
	function NeighborhoodHandler(socketHandler, Neighborhood) {
		this.neighborhoods = [];
		this.socketHandler = socketHandler;
		this.Neighborhood = Neighborhood;
		
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
				return new this.Neighborhood(name)
			}, this)
		);
	};
		
	NeighborhoodHandler.prototype.updateNeighborhood = function(neighborhood, amount) {
		neighborhood.setTTAmount(amount);
		this.socketHandler.updateNeighborhood(neighborhood.name, amount);
	};
}());