import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { App } from '../../providers/app';
import { HomePage } from '../home/home';
import { Register } from '../register/register';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  loading: any;
  data: any;
  user = {
    email: '',
    password: ''
  }

  register: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Auth, private loadingCtrl: LoadingController, private app: App) {
    this.register = Register;
  }

  doLogin(user) {
    event.preventDefault();
    if (!user.valid) {
      console.log("false")
    } else {
      this.app.Loader.present();
      this.auth.login(this.user)
        .subscribe(result => {
          if (result.status == 200) {
            console.log(result);
           this.app.Loader.dismiss();
            this.data = result
            localStorage.setItem('loginData', this.data._body);
            this.navCtrl.setRoot(HomePage)
            this.user = { email: '', password: '' }
          }
        }, error => {
          console.log("Error happened" + error)
        })
    }
    //this.navCtrl.push(HomePage)
    // this.navCtrl.push(HomePage,data) data mean params
    //next page get param this.navParams.get()
  }
  ionViewDidLoad() {
    let confirmData = JSON.parse(localStorage.getItem('loginData')).data;
    if (confirmData) return this.navCtrl.push(HomePage);
  }

}
