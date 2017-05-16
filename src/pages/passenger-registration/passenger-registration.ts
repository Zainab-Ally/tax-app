import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {HttpClient} from "../../providers/http-client";

/*
  Generated class for the PassengerRegistration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-passenger-registration',
  templateUrl: 'passenger-registration.html',
  providers : [HttpClient]
})
export class PassengerRegistrationPage {

  public mandatoryFields : any;
  public data : any= {};
  public loadingData: boolean;
  public loadingMessages : any = [];

  public selectedCategories : any;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private httpClient:HttpClient) {
  this.loadingData = false;
    this.mandatoryFields = [
      {name : "fname",key : "fname"},
      {name : "mname",key : "mname"},
      {name : "lname",key : "lname"},
      {name : "pnumber",key : "pnumber"},
      {name : "address",key : "address"},
      {name : "email",key : "email"}
    ];

  }

  sumitForm()
{
    console.log("Form is ready for submission");

    if(this.isAllMandatoryFieldsEntered() && this.selectedCategories.length > 0){
      let url = "/passenger_registration";
      this.loadingData = true;
      this.loadingMessages = [];
      //this.data.uni_id = this.selectedUniversity
      this.setLoadingMessages('Register account');
      this.httpClient.post(url,this.data).subscribe((response)=>{
        response = response.json();
       // this.setUserData(response);
      },error=>{
        this.loadingData = false;
        this.setToasterMessage("Fail to register account");
      });
  }


}

}
