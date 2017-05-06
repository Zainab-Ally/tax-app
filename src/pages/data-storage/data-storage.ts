import { Component } from '@angular/core';
//storage class
import {Storage} from '@ionic/storage';

import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DataStorage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-data-storage',
  templateUrl: 'data-storage.html'
})
export class DataStoragePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataStoragePage');
  }
// set and get data functions

  setData(){
    console.log("set data");
  }

  getData(){
    console.log("get data");
  }


}
