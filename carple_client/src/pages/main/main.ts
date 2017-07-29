import { Component } from '@angular/core';

import { PickUp } from './pickup/pickup';
import { GetIn } from './getin/getin';

@Component({
  templateUrl: 'main.html'
})
export class MainPage {

  tab1Root = GetIn;
  tab2Root = PickUp;

  constructor() {

  }
}
