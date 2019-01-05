import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WebApi } from './web-api';
import { Todo } from '../model/todo';

const baseUrl = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class RestWebApiService extends WebApi {

  constructor(private readonly http: HttpClient) {
    super();
  }

  getTodos(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${baseUrl}/todos`).pipe(
      map((todos: Todo[]) => todos.filter((t: Todo) => t.userId === userId))
    );
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/todos/${id}`);
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${baseUrl}/todos`, todo);
  }
}
