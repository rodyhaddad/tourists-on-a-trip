angular.module('tourists-tripping', [])
	.run(function (neighborhoodHandler) {
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
	})
	.directive('touristsTrippingApp', function (neighborhoodHandler) {
		return {
			restrict: 'E',
			templateUrl: 'tourists-tripping.html',
			link: function (scope) {
				scope.neighborhoods = neighborhoodHandler.neighborhoods;
				
				scope.updateNeighborhood = function(neighborhood, amount) {
					neighborhoodHandler.updateNeighborhood(neighborhood, amount);
				};
			}
		}
	});

document.addEventListener('DOMContentLoaded', function () {
	angular.bootstrap(document, ['tourists-tripping']);
});