import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  active:boolean=true;
todoItem=[];
todoContent={
  name:''
};
  constructor(public navCtrl: NavController) {

  }

addTodoItem(todoContent){
this.todoItem.push(Object.assign({},todoContent))
todoContent.name='';
}
isActive(){
this.active=!this.active;
}
deleteTodo(index){
 this.todoItem.splice(index, 1);
}
}
