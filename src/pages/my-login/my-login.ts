import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyLogin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-login',
  templateUrl: 'my-login.html',
})
export class MyLogin {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyLogin');
  }
//  export interface GetTodo {
//   todoTask: string
//   isfavourite: boolean
//   CreateBy: string
//   CreateAt: string
  
// }
}
