import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage } from '../home/home';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
user={
  email:'',
  password:''
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
doLogin(user){
console.log(user)
this.user={
  email:'',
  password:''
}
this.navCtrl.push(HomePage)
// this.navCtrl.push(HomePage,data) data mean params
//next page get param this.navParams.get()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
