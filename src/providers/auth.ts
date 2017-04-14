import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/toPromise"
import { AppConfig } from "../app.config";
// import 'rxjs/add/operator/map';

export interface User {
  firstName: string;
  lastName: string;
  password?: string;
  userName?: string;
  email: string;
  id: string;
  socialId?: string;
}

@Injectable()
export class Auth {

  constructor(public http: Http) {
    console.log('Hello Auth Provider');
  }

  login({ email, password }): Promise<any> {
    let url = `${AppConfig.API_URL}/login`;
    return this.http.post(url, {
      email: email,
      password: password
    }).toPromise();
  }

  register({ firstName, lastName, userName, email, password }): Promise<any> {
    let url = `${AppConfig.API_URL}/register`;
    return this.http.post(url, {
      firstName: firstName,
      userName: userName,
      lastName: lastName,
      email: email,
      password: password
    }).toPromise();
  }
  
  get uid() {
    return this.getUserData().id;
  }

  get user() {
    return this.getUserData()
  }

  private getUserData(): User {
    return JSON.parse(localStorage.getItem('loginData')).data
  }



}
