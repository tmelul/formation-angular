import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WebApi } from 'src/app/webapi/web-api';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  form: FormGroup;
  @Output() created: EventEmitter<Todo> = new EventEmitter();

  constructor(private readonly api: WebApi) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      completed: new FormControl(false)
    });
  }

  onSubmit() {
    const todo = {
      id: null,
      userId: 1,
      title: this.form.get('title').value,
      completed: this.form.get('completed').value
    };
    this.api.createTodo(todo).subscribe((newTodo: Todo) => {
      this.created.emit(newTodo);
    })
  }
}
