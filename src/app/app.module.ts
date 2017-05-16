import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapPage } from '../pages/map/map';
import {AboutPage} from "../pages/about/about";
import {DriverPage} from "../pages/driver/driver";
import {ProfilePage} from "../pages/profile/profile";
import {StatisticsPage} from "../pages/statistics/statistics";
import {TripHistoryPage} from "../pages/trip-history/trip-history";
import {PastBookingPage} from "../pages/past-booking/past-booking";
import {PendingBokingPage} from "../pages/pending-boking/pending-boking";
import {RegisterPage} from "../pages/register/register";
import {DriverRegistrationPage} from "../pages/driver-registration/driver-registration";
import {PassengerRegistrationPage} from "../pages/passenger-registration/passenger-registration";
import {LoginPage} from "../pages/login/login";
import {DataStoragePage} from "../pages/data-storage/data-storage";

import { IonicStorageModule } from '@ionic/storage';
import {RideListPage} from "../pages/ride-list/ride-list";



@NgModule({
  declarations: [
    MyApp,
    MapPage,AboutPage,DriverPage,ProfilePage,StatisticsPage,TripHistoryPage,PastBookingPage,
    PendingBokingPage,RegisterPage,DriverRegistrationPage,PassengerRegistrationPage,LoginPage,DataStoragePage,
    RideListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,AboutPage,DriverPage,ProfilePage,StatisticsPage,TripHistoryPage,PastBookingPage,
    PendingBokingPage,RegisterPage,DriverRegistrationPage,PassengerRegistrationPage,LoginPage,DataStoragePage,
    RideListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
