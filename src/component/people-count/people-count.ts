/// <reference path="../../../typings/tsd.d.ts"/>
import {Component, View, FormBuilder, Control, ControlGroup, onChange, formDirectives} from 'angular2/angular2';

@Component({
	selector: 'people-count',
	properties: ['title: tt-title', 'amount: tt-amount'],
	lifecycles: [onChange]
})
@View({
	templateUrl: 'component/people-count/people-count.html',
	directives: [formDirectives]
})
export class PeopleCount {
	title: String;
	amount: Number;
	
	amountControl:Control;
	peopleCountForm:ControlGroup;
	
	constructor(builder: FormBuilder) {
		this.amountControl = new Control()
		
		this.peopleCountForm = builder.group({
			"amount": this.amountControl
		});
	}
	
	onChange() {
		this.amountControl.updateValue(this.amount);
	}
}