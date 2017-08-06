import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainSidebar } from '../../main_sidebar/main_sidebar';
// import { LoginPage } from '../../login/login';
import { AlertController } from 'ionic-angular';

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

	constructor(public navCtrl: NavController, public conn: ConnectivityProvider, public alertCtrl: AlertController) { }

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
			let alert = this.alertCtrl.create({
				title: 'Join Fail',
				message: '입력정보를 확인해주세요',
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
			return;
		}

		this.ResetMainPage();
		
		this.conn.GetRemoteData(JSON.stringify({
			type:"join",
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
				{
					let alert = this.alertCtrl.create({
						title: 'Join Fail',
						message: '회원가입 실패',
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
	ResetLoginPage() {
		this.navCtrl.popToRoot();
	}
	ResetMainPage() {
		this.navCtrl.setRoot(MainSidebar);
	}
}