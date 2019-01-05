import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() delete: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    console.log('emit de suppression todo component');
    this.delete.emit(this.todo);
  }
}
