
PeopleCount.annotations = [
	new angular.ComponentAnnotation({
		selector: 'people-count',
		properties: ['title: tt-title', 'amount: tt-amount'],
		lifecycles: [angular.onChange],
		events: ['ttAmountChange']
	}),
	new angular.ViewAnnotation({
		templateUrl: 'component/people-count/people-count.html',
		directives: [angular.formDirectives]
	})
];
PeopleCount.parameters = [[angular.FormBuilder]];
function PeopleCount(builder) {
	this.amountControl = new angular.Control()
	
	this.peopleCountForm = builder.group({
		"amount": this.amountControl
	});
	
	this.ttAmountChange = new angular.EventEmitter();
}

PeopleCount.prototype.onChange = function() {
	this.amountControl.updateValue(this.amount);
}

PeopleCount.prototype.reportAmount = function() {
	var event = {
		amount: this.amountControl.value
	};
	
	this.ttAmountChange.next(event);
}