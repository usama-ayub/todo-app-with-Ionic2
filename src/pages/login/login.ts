import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import {HomePage } from '../home/home';
import {Register } from '../register/register';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  user = {
    email: '',
    password: ''
  }
  register:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Auth) {
    this.register = Register;
  }
  doLogin(user) {
    if (!user.valid) {
      console.log("false")
    } else {
      this.auth.login(this.user)
        .then(data => {
          localStorage.setItem('loginData', data._body);
          this.navCtrl.push(HomePage)
          this.user = {email: '',password: ''}
        })
    }
    //this.navCtrl.push(HomePage)
    // this.navCtrl.push(HomePage,data) data mean params
    //next page get param this.navParams.get()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
