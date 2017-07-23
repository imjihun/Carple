import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { Observable } from "rxjs/Observable";

declare var Connection;
/*
  Generated class for the ConnectivityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ConnectivityProvider {

	onDevice: boolean;
	constructor(public http: Http, public platform: Platform, private network: Network) {
		console.log('Hello ConnectivityProvider Provider');
		this.onDevice = this.platform.is('cordova');
	}

	// GetRemoteData(json_str : string) {
	// 	this.http.post('http://localhost:9000/', json_str).subscribe(data => {
	// 		console.log(data);
	// 	}, error => {console.log("error http.post, subscribe")});
	// }	

	// GetRemoteData(json_str : string)  {
	// 	let headers = new Headers();
	// 	headers.append('Content-Type', 'application/json');

	// 	this.http.post('http://localhost:9000/', json_str, {headers: headers})
	// 	.map(res => res.json())
	// 	.subscribe(data => {
	// 			console.log(data);
	// 		}, error => {
	// 			console.log("error http.post, subscribe");
	// 		}).unsubscribe();
	// }
	GetRemoteData(json_str : string): Observable<any>  {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post('http://localhost:9000/', json_str, {headers: headers})
		.map(res => res.json());
	}

	isOnline(): boolean {
		if (this.onDevice && this.network.onConnect()) {
			return this.network.onConnect() !== Connection.NONE;
		} else {
			return navigator.onLine;
		}
	}

	isOffline(): boolean {
		if (this.onDevice && this.network.onConnect()) {
			return this.network.onConnect() === Connection.NONE;
		} else {
			return !navigator.onLine;
		}
	}
}
