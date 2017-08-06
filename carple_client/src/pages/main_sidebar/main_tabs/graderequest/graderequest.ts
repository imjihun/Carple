import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ConnectivityProvider } from '../../../../providers/connectivity/connectivity';

@Component({
	selector: 'page-graderequest',
	templateUrl: 'graderequest.html'
})
export class GradeRequest {

	id:string = "";
	grade_request_list: Array<{id:string, disabled:boolean}> = [
	];

	constructor(public navCtrl: NavController, 
					public alertCtrl: AlertController, 
					public conn: ConnectivityProvider) 
	{
		this.AddGradeRequest({id:"id1", disabled:false});
		this.AddGradeRequest({id:"id2", disabled:false});
		this.AddGradeRequest({id:"id3", disabled:true});
	}

	ClickRequest()
	{
		if(this.id != "")
		{
			this.grade_request_list.push({id:this.id, disabled:false});
			this.id = "";
		}
	}
	ClickRequestCancel()
	{

	}
	AddGradeRequest(grade_request:{id:string, disabled:boolean})
	{
		this.grade_request_list.push(grade_request);
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
