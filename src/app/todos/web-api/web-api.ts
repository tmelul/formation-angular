import {OnInit} from '@angular/core';
import {Todo} from "../../model/todo.model";
import {Observable} from "rxjs";

export abstract class WebApi implements OnInit {

  constructor() {}

  ngOnInit() {}

  abstract getTodos(userId: number): Observable<Todo[]>;
  abstract addTodo(todoToAdd: Todo): Observable<void>;
  abstract deleteTodo(todoToDeleteId: number): Observable<void>;
  abstract deleteAllCheckedTodo(): Observable<void>;

}
