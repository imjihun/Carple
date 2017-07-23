import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../../main/main';
import { LoginPage } from '../../login/login';

import { ConnectivityProvider } from '../../../providers/connectivity/connectivity';

@Component({
	selector: 'page-join',
	templateUrl: 'join.html'
})
export class JoinPage {
	id:any;
	name:any;
	password:any;
	confirm_password:any;
	attach:any;
	phone:any;
	sex:any;

	constructor(public navCtrl: NavController, public conn: ConnectivityProvider) { }

	CheckJoin() :number
	{
		if(this.id == "" || this.id == null
			|| this.password == "" || this.password == null
			|| this.confirm_password == "" || this.confirm_password == null
			|| this.password != this.confirm_password
			|| this.name == "" || this.name == null)
			return -1;
		else
			return 0;
	}
	DoJoin()
	{
		if(this.CheckJoin() != 0)
		{
			alert("confirm info");
			return;
		}

		this.conn.GetRemoteData(JSON.stringify({
			id:this.id, 
			password:this.password,
			name:this.name,
			attach:this.attach,
			phone:this.phone,
			sex:this.sex
		}))
		.subscribe(
			retval => {
				if(JSON.parse(retval).retval == 0)
					this.ResetMainPage();
				else
					alert("join failed");
			}
			, error =>{
				console.log("error network");
			});
	}
	ResetLoginPage() {
		this.navCtrl.push(LoginPage);
		this.navCtrl.setRoot(LoginPage);
	}
	ResetMainPage() {
		this.navCtrl.push(MainPage);
		this.navCtrl.setRoot(MainPage);
	}
}