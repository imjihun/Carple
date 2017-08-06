import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { LoginPage } from '../../login/login';
import { JoinPage } from '../2_join/join';

@Component({
	selector: 'page-provision',
	templateUrl: 'provision.html'
})
export class ProvisionPage {
	constructor(public navCtrl: NavController) { }

	GoToJoinPage() {
		this.navCtrl.push(JoinPage);
	}
	ResetLoginPage() {
		this.navCtrl.popToRoot();
	}
}
