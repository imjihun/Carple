import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ConnectivityProvider } from '../../../../providers/connectivity/connectivity';

@Component({
	selector: 'page-board',
	templateUrl: 'board.html'
})
export class Board {

	cards: Array<{ id: string, name: string, date: string, title: string, content: string }> = [];

	constructor(public navCtrl: NavController,
		public alertCtrl: AlertController,
		public conn: ConnectivityProvider) {
		this.AddCard({ id: "id1", name: "name1", date: "12/30 11:12 AM", title: "title1", content: "content1" });
		this.AddCard({ id: "id2", name: "name2", date: "12/30 11:12 AM", title: "title2", content: "content2" });
		this.AddCard({ id: "id3", name: "name3", date: "12/30 11:12 AM", title: "title3", content: "content3" });
		this.AddCard({ id: "id4", name: "name4", date: "12/30 11:12 AM", title: "title4", content: "content4" });
		this.AddCard({ id: "id5", name: "name5", date: "12/30 11:12 AM", title: "title5", content: "content5" });
	}

	AddCard(card: { id: string, name: string, date: string, title: string, content: string }) {
		this.cards.push(card);
	}

	doInfinite(): Promise<any> {
		console.log('Begin async operation');

		return new Promise((resolve) => {
			setTimeout(() => {
				for (var i = 0; i < 5; i++) {
					this.cards.push(this.cards[i]);
				}
				resolve();
			}, 500);
		})
	}
}
