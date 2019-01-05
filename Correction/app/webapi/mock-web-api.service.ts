import { Injectable } from '@angular/core';
import { WebApi } from './web-api';
import { Observable, of } from 'rxjs';
import { Todo } from '../model/todo';

const TODOS = [{
  id: 0,
  userId: 0,
  title: 'lalala',
  completed: true
}, {
  id: 1,
  userId: 0,
  title: 'ha',
  completed: false
}];

@Injectable({
  providedIn: 'root'
})
export class MockWebApiService implements WebApi {

  constructor() { }

  getTodos(userId: number): Observable<Todo[]> {
    return of(TODOS);
  }

  deleteTodo(id: number): Observable<void> {
    TODOS.splice(TODOS.findIndex((t: Todo) => t.id === id), 1);
    return of(null);
  }

  createTodo(todo: Todo): Observable<Todo> {
    throw new Error('Not implemented');
  }
}
