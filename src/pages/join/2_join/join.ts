import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../../main/main';
import { LoginPage } from '../../login/login';

@Component({
	selector: 'page-join',
	templateUrl: 'join.html'
})
export class JoinPage {
  constructor(public navCtrl: NavController) {}

  ResetLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }
  ResetMainPage() {
    this.navCtrl.setRoot(MainPage);
  }
}