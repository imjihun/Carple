import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MainTabs } from './main_tabs/main_tabs';

import { Board } from './main_tabs/board/board';
import { Suggestion } from './main_tabs/suggestion/suggestion';
import { CarInfo } from './main_tabs/carinfo/carinfo';
import { UserInfo } from './main_tabs/userinfo/userinfo';
import { Grade } from './main_tabs/grade/grade';

@Component({
	templateUrl: 'main_sidebar.html'
})
export class MainSidebar {
	rootPage = MainTabs

	main_pages: Array<{ title: string, component: any }>;
	etc_pages: Array<{ title: string, component: any }>;
	option_pages: Array<{ title: string, component: any }>;

	constructor(public nav: NavController) {
		// used for an example of ngFor and navigation
		this.main_pages = [
			{ title: '후기게시판', component: Board },
			{ title: '장소요청', component: Suggestion },
			{ title: '차량정보', component: CarInfo },
			{ title: '나의정보', component: UserInfo },
			{ title: '신뢰마크', component: Grade }
		];
		this.etc_pages = [
			{ title: '후기게시판', component: Board },
			{ title: '장소요청', component: Suggestion }
		];
		this.option_pages = [
			{ title: '차량정보', component: CarInfo },
			{ title: '나의정보', component: UserInfo },
			{ title: '신뢰마크', component: Grade }
		];
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		// this.nav.setRoot(MainSidebar);
		this.nav.push(page.component);
	}
}
