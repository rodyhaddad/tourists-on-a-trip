
angular.module('tourists-tripping')
	.directive('peopleCount', function () {
		return {
			restrict: 'E',
			templateUrl: 'component/people-count/people-count.html',
			scope: {
				title: '=ttTitle',
				amount: '=ttAmount',
				ttAmountChange: '&'
			},
			link: function (scope) {
				scope.amountControl = 0;
				
				scope.$watch('amount', function (value) {
					scope.amountControl = value;
				});
				
				scope.reportAmount = function () {
					var event = {
						amount: this.amountControl
					};
					
					this.ttAmountChange({$event: event});
				}
			}
		};
	});