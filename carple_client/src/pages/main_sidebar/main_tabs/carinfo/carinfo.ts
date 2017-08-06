import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ConnectivityProvider } from '../../../../providers/connectivity/connectivity';

@Component({
	selector: 'page-carinfo',
	templateUrl: 'carinfo.html'
})
export class CarInfo {

	number_car: number;
	color_car: any;
	type_car: any;
	model_car: any;

	place: any = [
		{text: "동문회관앞", value: 0},
		{text: "공업센터", value: 1},
		{text: "pl2", value: 2},
		{text: "pl3", value: 3}
	];

	my_getin_info: any = {
	};
	my_pickup_lists: any = [
	];

	constructor(public navCtrl: NavController, 
					public alertCtrl: AlertController, 
					public conn: ConnectivityProvider) 
	{
		this.InitPickupInfo();
		this.AddPickupList({time:"7/30 9:12 AM", dst:"dst1"});
		this.AddPickupList({time:"7/01 12:09 PM", dst:"dst1"});
		this.AddPickupList({time:"12/30 11:12 AM", dst:"dst1"});
	}

	ClickCancel()
	{

	}

	ClickOk()
	{

	}

	private InitPickupInfo()
	{
		this.my_getin_info.src = 0;
	}

	ClickTableRefresh()
	{
		this.conn.GetRemoteData(JSON.stringify({
			type:"Refresh pickup table"
		}))
		.subscribe(
			retval => {
				if(JSON.parse(retval).retval == 0)
					alert("update success");
				else
					alert("update failed");
			}
			, error =>{
				console.log("error network");
			});
	}

	AddPickupList(item:any)
	{
		this.my_pickup_lists.push(item);
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
