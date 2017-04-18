import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the App provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/


@Injectable()
export class App {
  private loading: any;
  constructor(public http: Http, private loadingCtrl: LoadingController) {

    console.log('Hello App Provider');
  }
  get Loader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    return this.loading
  }

}
