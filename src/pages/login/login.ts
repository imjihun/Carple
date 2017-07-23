import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProvisionPage } from '../join/1_provision/provision';
import { MainPage } from '../main/main';

import { ConnectivityProvider } from '../../providers/connectivity/connectivity';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	id : any;
	password : any;

	constructor(public navCtrl: NavController, public conn: ConnectivityProvider) {

	}

	GoToJoinPage() {
		//push another page onto the history stack
		//causing the nav controller to animate the new page in
		this.navCtrl.push(ProvisionPage);
	}
	DoLogin()
	{
		this.conn.GetRemoteData(JSON.stringify({id:this.id, password:this.password}))
		.subscribe(
			retval => {
				if(JSON.parse(retval).retval == 0)
					this.ResetMainPage();
				else
					alert("check the id, password");
			}
			, error =>{
				console.log("error network");
			});
		
	}
	ResetMainPage() {
		this.navCtrl.push(MainPage);
		this.navCtrl.setRoot(MainPage);
	}
}
