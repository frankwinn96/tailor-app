import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  getShop(){
    return this.http.get("https://guarded-springs-73990.herokuapp.com/api/shops")
    .map(res => res.json())  
  }


  getMeasurement(){
    return this.http.get("https://guarded-springs-73990.herokuapp.com/api/users/59ccf2ee6fb98e03d9fd07d6/measure")
    .map(res => res.json())
  }
}
