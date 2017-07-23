import { Component } from '@angular/core';

import { ComeHomePage } from './comehome/comehome';
import { GoToSchoolPage } from './gotoschool/gotoschool';

@Component({
  templateUrl: 'main.html'
})
export class MainPage {

  tab1Root = GoToSchoolPage;
  tab2Root = ComeHomePage;

  constructor() {

  }
}
