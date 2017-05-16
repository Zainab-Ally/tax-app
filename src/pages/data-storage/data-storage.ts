import { Component } from '@angular/core';

import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController,public Storage: Storage,
              public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataStoragePage');
  }
// set and get data functions

  setData(){
    this.Storage.ready().then(()=>{
      this.Storage.set("name","My app");
    });
    console.log("set data");
  }

  getData(){
    this.Storage.ready().then(() => {
      this.Storage.get('name').then((val) => {
        console.log('Your set value is : ', val);
      })
    });
    console.log("get data");
  }


}
