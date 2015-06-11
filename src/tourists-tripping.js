TouristsTrippingApp.annotations = [
	new angular.ComponentAnnotation({
		selector: 'tourists-tripping-app',
		appInjector: [NeighborhoodHandler, SocketHandler, angular.FormBuilder]
	}),
	new angular.ViewAnnotation({
		templateUrl: 'tourists-tripping.html',
		directives: [angular.NgFor, PeopleCount]
	})
];
TouristsTrippingApp.parameters = [[NeighborhoodHandler]];

function TouristsTrippingApp(neighborhoodHandler) {
		this.neighborhoodHandler = neighborhoodHandler;
		this.neighborhoods = neighborhoodHandler.neighborhoods;
		
		neighborhoodHandler.pushNeighboorhood(
			'Central Amsterdam',
			'Red Light District',
			'Leidseplein',
			'Oud Zuid',
			'Rembrandtplein',
			'Jordaan',
			'The Plantagebuurt',
			'De Pijp'
		);
}

TouristsTrippingApp.prototype.updateNeighborhood = function(neighborhood, amount) {
	this.neighborhoodHandler.updateNeighborhood(neighborhood, amount);
}

document.addEventListener('DOMContentLoaded', function () {
	angular.bootstrap(TouristsTrippingApp);
});