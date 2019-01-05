import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { WebApi } from '../webapi/web-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private readonly webapi: WebApi, private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.todos = data.todos;
    });
  }

  onDelete(todo: Todo): void {
    this.webapi.deleteTodo(todo.id).subscribe(() => {
      this.todos = this.todos.filter((t: Todo) => t.id !== todo.id);
    });
  }

  onCreated(todo: Todo): void {
    this.todos.unshift(todo);
  }
}
