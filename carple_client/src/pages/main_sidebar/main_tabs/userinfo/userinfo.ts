import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ConnectivityProvider } from '../../../../providers/connectivity/connectivity';

@Component({
	selector: 'page-userinfo',
	templateUrl: 'userinfo.html'
})
export class UserInfo {
	id:any;
	name:any;
	password:any;
	confirm_password:any;
	attach:any;
	phone:any;
	sex:any;

	constructor(public navCtrl: NavController, 
					public alertCtrl: AlertController, 
					public conn: ConnectivityProvider) 
	{
	}
	ClickCancel()
	{
		this.navCtrl.pop();
	}
	ClickOk()
	{
		this.navCtrl.pop();
	}
	ClickPickupList()
	{
		let alert = this.alertCtrl.create({
			title: '신청확인',
			message: '약속장소에 최소한 2분전에는 도착하시겠습니까?',
			buttons: [
				{
					text: 'Cancel',
					handler: data => {
						console.log('Cancel clicked');
					}
				}, 
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
