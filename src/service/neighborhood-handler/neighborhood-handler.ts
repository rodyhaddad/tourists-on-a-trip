/// <reference path="../../../typings/tsd.d.ts"/>
import {Injectable} from 'angular2/angular2';
import {Neighborhood} from './neighborhood';
import {SocketHandler} from '../../service/socket-handler/socket-handler';

@Injectable()
export class NeighborhoodHandler {
	neighborhoods:Neighborhood[];
	socketHandler:SocketHandler;
	
	constructor(socketHandler:SocketHandler) {
		this.neighborhoods = [];
		this.socketHandler = socketHandler;
		
		this.socketHandler.onUpdateNeighboorhood((name, amount) => {
			var neighborhood:Neighborhood = this.neighborhoods.filter((n) => n.name === name)[0];
			if (neighborhood) {
				neighborhood.setTTAmount(amount);
			}
		});
	}
	
	pushNeighboorhood(...names:Array<String>) {
		this.neighborhoods.push(
			...names.map((name) => {
				return new Neighborhood(name)
			})
		);
	}
	
	updateNeighborhood(neighborhood:Neighborhood, amount:Number) {
		this.socketHandler.updateNeighborhood(neighborhood.name, amount);
	}
}