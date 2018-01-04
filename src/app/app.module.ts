import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FCM } from '@ionic-native/fcm';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServiceProvider } from '../providers/service/service';
import { HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
// var config = {
//   apiKey: "AIzaSyB4V6zBoEm4FPidl6HtXFsQn5-p5czrWfM",
//   authDomain: "pushnotificationmcon.firebaseapp.com",
//   databaseURL: "https://pushnotificationmcon.firebaseio.com",
//   projectId: "pushnotificationmcon",
//   storageBucket: "pushnotificationmcon.appspot.com",
//   messagingSenderId: "739884870385"
// };
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    HttpClient
  ]
})
export class AppModule {}
