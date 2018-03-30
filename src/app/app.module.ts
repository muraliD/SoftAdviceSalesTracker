import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main'; 
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';

import { AttendancePage } from '../pages/attendance/attendance';
import { SalesPage } from '../pages/sales/sales';
import { StockPage } from '../pages/stock/stock';
import { OffersPage } from '../pages/offers/offers';
import {PerformancePage } from '../pages/performance/performance';
import { UploadimagesPage } from '../pages/uploadimages/uploadimages';
import { HelpPage } from '../pages/help/help';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    MainPage,
    ProfilePage,
    AttendancePage,
SalesPage,
StockPage,
OffersPage,
PerformancePage,
UploadimagesPage,
HelpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    MainPage,
    ProfilePage,
    AttendancePage,
SalesPage,
StockPage,
OffersPage,
PerformancePage,
UploadimagesPage,
HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
