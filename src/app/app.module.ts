import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapPage } from '../pages/map/map';
import {AboutPage} from "../pages/about/about";

import {DriverPage} from "../pages/driver/driver";
import {ProfilePage} from "../pages/profile/profile";
import {StatisticsPage} from "../../../taximobile/src/pages/statistics/statistics";
import {TripHistoryPage} from "../pages/trip-history/trip-history";
import {PastBookingPage} from "../pages/past-booking/past-booking";

@NgModule({
  declarations: [
    MyApp,
    MapPage,AboutPage,DriverPage,ProfilePage,StatisticsPage,TripHistoryPage,PastBookingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,AboutPage,DriverPage,ProfilePage,StatisticsPage,TripHistoryPage,PastBookingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
