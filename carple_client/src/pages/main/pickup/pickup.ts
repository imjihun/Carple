import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-pickup',
	templateUrl: 'pickup.html'
})
export class PickUp {
	place: any = [
		{text: "동문회관앞", value: 0},
		{text: "공업센터", value: 1},
		{text: "pl2", value: 2},
		{text: "pl3", value: 3}
	];

	my_pickup_info: any = {
	};
	my_recv_getin_requests: any = [
	];

	constructor(public navCtrl: NavController) {
		this.InitPickupInfo();

		this.AddRecvGetinRequest({name:"name1", dst:"dst1", disabled:true});
		this.AddRecvGetinRequest({name:"name2", dst:"dst2", disabled:false});
		this.AddRecvGetinRequest({name:"name3", dst:"dst3", disabled:true});
	}
	private InitPickupInfo()
	{
		this.my_pickup_info.time = new Date().toISOString();
		this.my_pickup_info.src = 0;
		this.my_pickup_info.dst = 1;
	}
	__debug()
	{
		console.log(this.my_pickup_info);
	}

	AddRecvGetinRequest(item:any)
	{
		this.my_recv_getin_requests.push(item);
	}
}
