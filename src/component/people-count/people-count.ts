/// <reference path="../../../typings/tsd.d.ts"/>
import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'people-count',
	properties: ['title: tt-title', 'amount: tt-amount']
})
@View({
	templateUrl: 'component/people-count/people-count.html'
})
export class PeopleCount {
	title: String;
	amount: Number;
}