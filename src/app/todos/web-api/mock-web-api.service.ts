import {Injectable} from '@angular/core';
import {WebApi} from "./web-api";
import {Todo} from "../../model/todo.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MockWebApiService extends WebApi {

  todos: Todo[] = [
    new Todo(-1, 1, 'todo1', false),
    new Todo(-2, 1, 'todo2', true),
    new Todo(-3, 2, 'todo3', false),
  ];

  constructor() {
    super();
  }

  addTodo(todoToAdd: Todo): Observable<void> {
    return of(null);
  }

  deleteTodo(todoToDeleteId: number) {
    return of(null);
  }

  getTodos(userId: number): Observable<Todo[]> {
    return of(this.todos.filter(todo => todo.userId === userId));
  }

  deleteAllCheckedTodo(): Observable<void> {
    return of(null);
  }
}
