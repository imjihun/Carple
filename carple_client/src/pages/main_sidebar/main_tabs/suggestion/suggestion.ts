import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ConnectivityProvider } from '../../../../providers/connectivity/connectivity';

@Component({
	selector: 'page-suggestion',
	templateUrl: 'suggestion.html'
})
export class Suggestion {
	content:string = "";

	constructor(public navCtrl: NavController, 
					public alertCtrl: AlertController, 
					public conn: ConnectivityProvider) 
	{
	}
	ClickSend()
	{
		this.navCtrl.pop();
	}
}