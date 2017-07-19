import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { ProvisionPage } from '../pages/join/1_provision/provision';
import { JoinPage } from '../pages/join/2_join/join';

import { MainPage } from '../pages/main/main';
import { GoToSchoolPage } from '../pages/main/gotoschool/gotoschool';
import { ComeHomePage } from '../pages/main/comehome/comehome';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,

    LoginPage,
	JoinPage,
	ProvisionPage,

	MainPage,
	GoToSchoolPage,
	ComeHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	
    LoginPage,
	JoinPage,
	ProvisionPage,

	MainPage,
	GoToSchoolPage,
	ComeHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
