import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { LoginPage } from '../pages/login/login';
import { ProvisionPage } from '../pages/join/1_provision/provision';
import { JoinPage } from '../pages/join/2_join/join';

import { MainSidebar } from '../pages/main_sidebar/main_sidebar';

import { MainTabs } from '../pages/main_sidebar/main_tabs/main_tabs';

import { GetIn } from '../pages/main_sidebar/main_tabs/getin/getin';
import { PickUp } from '../pages/main_sidebar/main_tabs/pickup/pickup';
import { Board } from '../pages/main_sidebar/main_tabs/board/board';
import { Suggestion } from '../pages/main_sidebar/main_tabs/suggestion/suggestion';
import { CarInfo } from '../pages/main_sidebar/main_tabs/carinfo/carinfo';
import { UserInfo } from '../pages/main_sidebar/main_tabs/userinfo/userinfo';
import { Grade } from '../pages/main_sidebar/main_tabs/grade/grade';
import { GradeRequest } from '../pages/main_sidebar/main_tabs/graderequest/graderequest';
import { GradeApprove } from '../pages/main_sidebar/main_tabs/gradeapprove/gradeapprove';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConnectivityProvider } from '../providers/connectivity/connectivity';

@NgModule({
  declarations: [
    MyApp,

    LoginPage,
	JoinPage,
	ProvisionPage,

	MainSidebar,

	MainTabs,

	GetIn,
	PickUp,
	Board,
	Suggestion,
	CarInfo,
	UserInfo,
	Grade,
	GradeRequest,
	GradeApprove
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

	MainSidebar,

	MainTabs,

	GetIn,
	PickUp,
	Board,
	Suggestion,
	CarInfo,
	UserInfo,
	Grade,
	GradeRequest,
	GradeApprove
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
