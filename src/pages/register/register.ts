import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';
import { Login } from '../login/login';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: ''
  }
  login: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Auth) {
    this.login = Login;
  }

  doRegister(user) {
    if (!user.invalid) {
      console.log("false")
    } else {
      this.auth.register(this.user)
        .then(data => {
          this.navCtrl.push(HomePage)
          this.user = {
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            password: ''
          }
        })
    }
    //this.navCtrl.push(HomePage)
    // this.navCtrl.push(HomePage,data) data mean params
    //next page get param this.navParams.get()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

}
