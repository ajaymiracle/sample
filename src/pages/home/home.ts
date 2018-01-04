import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { FCM } from '@ionic-native/fcm';
import { ServiceProvider } from '../../providers/service/service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
   // private fcm: FCM,
   private storage: Storage,
  public service: ServiceProvider) {
    this.service.getCompletedConferences()
    .subscribe((data) => {
      console.log(data);
      if (data.isDataExisted == true) {
        
       
        console.log(data.conferences);
       
      }
      else {
       
      }
    });;
      // this.fcm.getToken().then(token=>{
      //   console.log(token);
      // })
      //storage.set('name', 'Max');
      storage.get('name').then((val) => {
        console.log('Your name is', val);
      });
  }

}
