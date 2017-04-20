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
import {PendingBokingPage} from "../pages/pending-boking/pending-boking";

import {DriverRegistrationPage} from "../pages/driver-registration/driver-registration";
import {PassengerRegistrationPage} from "../pages/passenger-registration/passenger-registration";
import {RegisterPage} from "../pages/register/register";
import {LoginPage} from "../pages/login/login";


@NgModule({
  declarations: [
    MyApp,
    MapPage,AboutPage,DriverPage,ProfilePage,StatisticsPage,TripHistoryPage,PastBookingPage,
    PendingBokingPage,RegisterPage,DriverRegistrationPage,PassengerRegistrationPage,LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,AboutPage,DriverPage,ProfilePage,StatisticsPage,TripHistoryPage,PastBookingPage,
    PendingBokingPage,RegisterPage,DriverRegistrationPage,PassengerRegistrationPage,LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
