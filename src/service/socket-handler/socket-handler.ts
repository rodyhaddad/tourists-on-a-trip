/// <reference path="../../../typings/tsd.d.ts"/>
import {Injectable} from 'angular2/angular2';

@Injectable()
export class SocketHandler {
	socket:SocketIOClient.Socket;
	
	constructor() {
		this.socket = io.connect('http://localhost:9898');
	}
	
	updateNeighborhood(name, TTAmount) {
		this.socket.emit('updateNeighborhoods', {
			[name]: TTAmount
		});
	}
	
	onUpdateNeighboorhood(listener) {
		this.socket.on('updateNeighborhoods', function (data) {
			Object.keys(data).forEach(
				(name) => listener(name, data[name]) );
		});
	}
}

