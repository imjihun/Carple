import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProvisionPage } from '../join/1_provision/provision';
import { MainSidebar } from '../main_sidebar/main_sidebar';
import { AlertController } from 'ionic-angular';

import { ConnectivityProvider } from '../../providers/connectivity/connectivity';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	id : any;
	password : any;

	constructor(public navCtrl: NavController, public conn: ConnectivityProvider, public alertCtrl: AlertController) {

	}

	GoToJoinPage() {
		//push another page onto the history stack
		//causing the nav controller to animate the new page in
		this.navCtrl.push(ProvisionPage);
	}
	DoLogin()
	{
		this.ResetMainPage();

		this.conn.GetRemoteData(JSON.stringify({
				type:"login",
				id:this.id, 
				password:this.password
			}))
		.subscribe(
			retval => {
				if(JSON.parse(retval).retval == 0)
					this.ResetMainPage();
				else
				{
					let alert = this.alertCtrl.create({
						title: 'Login Fail',
						message: 'id 와 password 를 확인해 주세요',
						buttons: [
							{
								text: 'Ok',
								handler: data => {
									console.log('Ok clicked');
								}
							}
						]
					});
					alert.present();
				}
			}
			, error =>{
				console.log("error network");
			});
		
	}
	ResetMainPage() {
		this.navCtrl.setRoot(MainSidebar);
	}
}
