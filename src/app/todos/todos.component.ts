import {Component, OnInit} from '@angular/core';
import {Todo} from "../model/todo.model";
import {WebApiService} from "./web-api/web-api.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(
    private webApiService: WebApiService
  ) {
  }

  todos: Todo[] = [];

  ngOnInit() {
    this.webApiService.getTodos(1).pipe(
      tap(todos => console.log('Avant : ' + todos.length)),
      map(todos => todos.filter(todo => todo.userId === 1)),
      tap(todos => console.log('Après : ' + todos.length))
    ).subscribe(todos => this.todos = todos);
  }

  addTodo(todoToAdd: Todo) {
    this.webApiService.addTodo(todoToAdd).subscribe(() =>
      this.todos.push(todoToAdd)
    );
  }

  deleteTodo(todoToDelete: Todo) {
    this.webApiService.deleteTodo(todoToDelete.id).subscribe(() =>
      this.todos = this.todos.filter(todo => todo.id !== todoToDelete.id)
    );
  }

  deleteAllCheckedTodo() {
    this.webApiService.deleteAllCheckedTodo().subscribe(() =>
      this.todos = this.todos.filter(todo => todo.completed === false)
    );
  }
}
