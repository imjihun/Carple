import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProvisionPage } from '../join/1_provision/provision';
import { MainPage } from '../main/main';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {

	constructor(public navCtrl: NavController) {

	}

	GoToJoinPage() {
		//push another page onto the history stack
		//causing the nav controller to animate the new page in
		this.navCtrl.push(ProvisionPage);
	}

	ResetMainPage() {
		this.navCtrl.setRoot(MainPage);
	}
}
