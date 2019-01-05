import {Injectable} from '@angular/core';
import {WebApi} from "./web-api";
import {Todo} from "../../model/todo.model";
import {Observable, of} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebApiService extends WebApi {

  constructor(private httpClient: HttpClient) {
    super();
  }

  addTodo(todoToAdd: Todo): Observable<void> {
    return of(null);
  }

  deleteAllCheckedTodo(): Observable<void> {
    return of(null);
  }

  deleteTodo(todoToDeleteId: number): Observable<void> {
    return of(null);
  }

  getTodos(userId: number): Observable<Todo[]> {
    let params = new HttpParams()/*.set('userId', ''+userId)*/;
    return this.httpClient.get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
      params: params
    });
  }

}
