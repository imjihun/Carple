import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { LoginPage } from '../pages/login/login';
import { ProvisionPage } from '../pages/join/1_provision/provision';
import { JoinPage } from '../pages/join/2_join/join';

import { MainPage } from '../pages/main/main';
import { GetIn } from '../pages/main/getin/getin';
import { PickUp } from '../pages/main/pickup/pickup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConnectivityProvider } from '../providers/connectivity/connectivity';

@NgModule({
  declarations: [
    MyApp,

    LoginPage,
	JoinPage,
	ProvisionPage,

	MainPage,
	GetIn,
	PickUp
  ],
  imports: [
    BrowserModule,
	HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	
    LoginPage,
	JoinPage,
	ProvisionPage,

	MainPage,
	GetIn,
	PickUp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	Network,
    ConnectivityProvider
  ]
})
export class AppModule {}
