import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/toPromise"
import {Observable} from "rxjs/Observable"
import 'rxjs/add/operator/map';
import { Auth } from '../providers/auth';
import {AppConfig} from "../app.config";


@Injectable()
export class Todo {

  constructor(public http: Http ,private auth:Auth) {
    console.log('Hello Todo Provider');
  }

 addTodo({todoTask, CreateBy,isfavourite}): Promise<any> {
    let url = `${AppConfig.API_URL}/user/todo`;
    return this.http.post(url, {
      todoTask: todoTask,
      CreateBy: CreateBy,
      isfavourite: isfavourite
    }).toPromise();
  }

  getTodo() : Observable <any>  {
    let url = `${AppConfig.API_URL}/user/${this.auth.uid}/todo`;
    return this.http.get(url)
      .map(response => response.json().data);
  }

    addFavouriteTodo({user_id,todo_id,isfavourite}) : Promise <any>  {
    let url = `${AppConfig.API_URL}/user/todo/favourite`;
     return this.http.put(url, {
      user_id: user_id,
      todo_id: todo_id,
      isfavourite: isfavourite
    }).toPromise();
  }
 deleteTodo({user_id,todo_id}) : Promise <any>  {
    let url = `${AppConfig.API_URL}/user/${user_id}/todo/${todo_id}`;
     return this.http.delete(url, {}).toPromise();
  

}
}