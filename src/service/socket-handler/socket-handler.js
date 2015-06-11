
(function () {
	angular.module('tourists-tripping')
		.service('socketHandler', SocketHandler);
		
	function SocketHandler($rootScope) {
		this.socket = io.connect('http://localhost:9898');
		this.$rootScope = $rootScope;
	}
	
	SocketHandler.prototype.updateNeighborhood = function(name, TTAmount) {
		var event = {};
		event[name] = TTAmount;
		this.socket.emit('updateNeighborhoods', event);
	}
	
	SocketHandler.prototype.onUpdateNeighboorhood = function(listener) {
		var $rootScope = this.$rootScope;
		this.socket.on('updateNeighborhoods', function (data) {
			
			$rootScope.$apply(function () {
				Object.keys(data).forEach(
					function(name) { listener(name, data[name]) } );
			});
		});
	}
}());