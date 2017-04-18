import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from "rxjs/Observable"
import { App } from '../../providers/app';
import { Auth } from '../../providers/auth';
import { Todo } from '../../providers/todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  todoItem = [];
  todoContent = {
    todoTask: '',
    isfavourite: false
  };
  addTodoObj: any;
  todofavouriteObj: any;
  todoDeleteObj: any;
  constructor(public navCtrl: NavController, private auth: Auth, private todo: Todo, private app: App) {

  }
  ngOnInit() {
    this.app.Loader.present();
    this.todo.getTodo()
      .subscribe(data => {
        this.todoItem = data;
        if (data.length > 0) {
          this.app.Loader.dismiss();
        } else {
          this.app.Loader.dismiss();
        }
      })

    this.addTodoObj = {
      todoTask: '',
      CreateBy: '',
      isfavourite: false
    }
    this.todofavouriteObj = {
      user_id: '',
      todo_id: '',
      isfavourite: false
    }
    this.todoDeleteObj = {
      user_id: '',
      todo_id: ''
    }
  }

  addTodoItem(todoContent) {
    this.todoItem.push(Object.assign({}, todoContent))
    this.addTodoObj = {
      todoTask: todoContent.todoTask,
      CreateBy: this.auth.uid,
      isfavourite: todoContent.isfavourite
    }

    this.todo.addTodo(this.addTodoObj)
      .then(data => {

      })
    todoContent.todoTask = ''
  }
  isActive(index) {
   this.app.Loader.present();
    this.todofavouriteObj = {
      user_id: index.CreateBy,
      todo_id: index._id,
      isfavourite: !index.isfavourite
    }
    this.todo.addFavouriteTodo(this.todofavouriteObj)
      .then(data => {
        if (data.status == 200) {
          this.todoItem.map(item => {
            if (item._id == index._id) {
              item.isfavourite = !index.isfavourite;
            }
          })
        }
        this.app.Loader.dismiss();
      })
  }
  deleteTodo(index) {
    this.todoItem.splice(index, 1);
    this.todoDeleteObj = {
      user_id: index.CreateBy,
      todo_id: index._id
    }
    this.todo.deleteTodo(this.todoDeleteObj)
      .then(data => {
        console.log(data);
      })
  }
}
