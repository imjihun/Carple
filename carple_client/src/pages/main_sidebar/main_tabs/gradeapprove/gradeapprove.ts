import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ConnectivityProvider } from '../../../../providers/connectivity/connectivity';

@Component({
	selector: 'page-gradeapprove',
	templateUrl: 'gradeapprove.html'
})
export class GradeApprove {
	
	grade_approve_list: Array<{id:string, disabled:boolean}> = [
	];


	constructor(public navCtrl: NavController, 
					public alertCtrl: AlertController, 
					public conn: ConnectivityProvider) 
	{
		this.AddGradeApprove({id:"id1", disabled:false});
		this.AddGradeApprove({id:"id2", disabled:false});
		this.AddGradeApprove({id:"id3", disabled:false});
	}
	ClickApprove()
	{
		
	}
	AddGradeApprove(grade_approve:{id:string, disabled:boolean})
	{
		this.grade_approve_list.push(grade_approve);
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
