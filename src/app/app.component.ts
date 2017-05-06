import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MapPage } from '../pages/map/map';
import {AboutPage} from "../pages/about/about";

import {DriverPage} from "../pages/driver/driver";

import {DriverRegistrationPage} from "../pages/driver-registration/driver-registration";
import {PassengerRegistrationPage} from "../pages/passenger-registration/passenger-registration";
import {RegisterPage} from "../pages/register/register";
import {LoginPage} from "../pages/login/login";
import {DataStoragePage} from "../pages/data-storage/data-storage";




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MapPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component:  LoginPage },
      { title: 'Home', component: MapPage },
      { title: 'About', component: AboutPage },

      { title: 'Driver', component: DriverPage },
      { title: 'Registration', component: RegisterPage },
      { title: 'My data', component: DataStoragePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
