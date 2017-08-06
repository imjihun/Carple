import { Component } from '@angular/core';

import { PickUp } from './pickup/pickup';
import { GetIn } from './getin/getin';
// import { EtcMenu } from './etcmenu/etcmenu';

@Component({
	templateUrl: 'main_tabs.html'
})
export class MainTabs {
	tab1Root = GetIn;
	tab2Root = PickUp;
	// tab3Root = EtcMenu;

	constructor() {
	}
}
