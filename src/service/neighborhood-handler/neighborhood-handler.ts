/// <reference path="../../../typings/tsd.d.ts"/>
import {Injectable} from 'angular2/angular2';
import {Neighborhood} from './neighborhood';

@Injectable()
export class NeighborhoodHandler {
	neighborhoods:Neighborhood[];
	
	constructor() {
		this.neighborhoods = [];
	}
	
	pushNeighboorhood(...names:Array<String>) {
		this.neighborhoods.push(
			...names.map((name) => {
				return new Neighborhood(name)
			})
		);
	}
}