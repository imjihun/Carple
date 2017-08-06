import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ConnectivityProvider } from '../../../../providers/connectivity/connectivity';

@Component({
	selector: 'page-pickup',
	templateUrl: 'pickup.html'
})
export class PickUp {
	place: any = [
		{ text: "동문회관앞", value: 0 },
		{ text: "공업센터", value: 1 },
		{ text: "pl2", value: 2 },
		{ text: "pl3", value: 3 }
	];

	my_pickup_info: any = {
	};
	my_recv_getin_requests: any = [
	];

	constructor(public navCtrl: NavController,
					public alertCtrl: AlertController,
					public conn: ConnectivityProvider) 
	{
		this.InitPickupInfo();

		this.AddRecvGetinRequest({ name: "name1", dst: "dst1", disabled: true });
		this.AddRecvGetinRequest({ name: "name2", dst: "dst2", disabled: false });
		this.AddRecvGetinRequest({ name: "name3", dst: "dst3", disabled: true });
	}
	private InitPickupInfo() {
		this.my_pickup_info.time = new Date().toISOString();
		this.my_pickup_info.src = 0;
		this.my_pickup_info.dst = 1;
	}
	ClickUpdatePickupInfo() {
		this.conn.GetRemoteData(JSON.stringify({
			type: "Update PickupInfo",
			time: this.my_pickup_info.time,
			src: this.my_pickup_info.src,
			dst: this.my_pickup_info.dst
		}))
			.subscribe(
			retval => {
				// server success return
				if (JSON.parse(retval).retval == 0) {
					let alert = this.alertCtrl.create({
						title: '등록',
						message: '태우기 정보 등록에 성공하였습니다.',
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
				// server fail return
				else {
					let alert = this.alertCtrl.create({
						title: '등록실패',
						message: '태우기 정보 등록에 실패하였습니다.',
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
			, error => {
				console.log("error network");
			});
	}

	AddRecvGetinRequest(item: any) {
		this.my_recv_getin_requests.push(item);
	}
	ClickRecvGetinRequest() {
		let alert = this.alertCtrl.create({
			title: '승인',
			message: '차량탑승을 승인하시겠습니까?',
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
