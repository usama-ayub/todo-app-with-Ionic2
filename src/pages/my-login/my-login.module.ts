import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyLogin } from './my-login';

@NgModule({
  declarations: [
    MyLogin,
  ],
  imports: [
    //IonicModule.forChild(MyLogin),
  ],
  exports: [
    MyLogin
  ]
})
export class MyLoginModule {}
