import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }
news(): Observable<any>{
  this.http.get("https://newsapi.org/v1/sources?language=en").subscribe(data =>{
    console.log(data);
  })
let body = {
  "LoginId": "apatnaik"
}
return this.http.post("http://192.168.1.203:9999/WebRoot/resources/mconEventService/doGetUpcomingConferenceForUser",body).map( data =>{
  data
  })
}

getCompletedConferences(): Observable<any> {
  let body = {
    "LoginId": "apatnaik"
  }
  let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  let options = new RequestOptions({ headers: headers }); // Create a request option
  return this.http.post("http://192.168.1.203:9999/WebRoot/resources/mconEventService/doGetUpcomingConferenceForUser", body) // ...using post request
    .map(res => res) // ...and calling .json() on the response to return data
    .catch(this.handleError); //...errors if any
}
handleError(error: Response) {
  console.log(JSON.stringify(error)) ;
  return Observable.throw(error || 'Server error');
}
}
