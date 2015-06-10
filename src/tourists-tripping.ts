/// <reference path="../typings/tsd.d.ts"/>
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {NeighborhoodHandler} from 'service/neighborhood-handler/neighborhood-handler';
import {Neighborhood} from 'service/neighborhood-handler/neighborhood';
import {PeopleCount} from 'component/people-count/people-count';


@Component({
	selector: 'tourists-tripping-app',
	appInjector: [NeighborhoodHandler]
})
@View({
	templateUrl: 'tourists-tripping.html',
	directives: [NgFor, PeopleCount]
})
class TouristsTrippingApp {
	neighborhoods:Neighborhood[];
	
	constructor(neighborhoodHandler:NeighborhoodHandler) {
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
	
}

bootstrap(TouristsTrippingApp);