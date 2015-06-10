/// <reference path="../typings/tsd.d.ts"/>
import {Component, View, bootstrap, NgFor, FormBuilder} from 'angular2/angular2';
import {NeighborhoodHandler} from 'service/neighborhood-handler/neighborhood-handler';
import {Neighborhood} from 'service/neighborhood-handler/neighborhood';
import {PeopleCount} from 'component/people-count/people-count';
import {SocketHandler} from 'service/socket-handler/socket-handler';


@Component({
	selector: 'tourists-tripping-app',
	appInjector: [NeighborhoodHandler, SocketHandler, FormBuilder]
})
@View({
	templateUrl: 'tourists-tripping.html',
	directives: [NgFor, PeopleCount]
})
class TouristsTrippingApp {
	neighborhoodHandler:NeighborhoodHandler;
	neighborhoods:Neighborhood[];
	
	constructor(neighborhoodHandler:NeighborhoodHandler) {
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
	
	updateNeighborhood(neighborhood:Neighborhood, amount:Number) {
		this.neighborhoodHandler.updateNeighborhood(neighborhood, amount);
	}
	
}

bootstrap(TouristsTrippingApp);