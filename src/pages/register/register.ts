import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from '../../providers/app';
import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';
import { Login } from '../login/login';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  data: any;
  user = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: ''
  }
  login: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Auth, private app: App) {
    this.login = Login;
  }

  doRegister(user) {
    if (!user.valid) {
      console.log("false")
    } else {
      this.app.Loader.present();
      this.auth.register(this.user)
        .subscribe(result => {
          if (result.status == 200) {
            console.log(result)
            this.app.Loader.dismiss();
            this.data = result
            localStorage.setItem('loginData', this.data._body);
            this.navCtrl.setRoot(HomePage)
            this.user = {
              firstName: '',
              lastName: '',
              email: '',
              userName: '',
              password: ''
            }
          }
        }, error => {
          console.log("Error happened" + error)
        })
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

}
