import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../model/todo.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  public todo: Todo;

  @Output()
  onDeleteTodo = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit() {}

  deleteTodo(){
    this.onDeleteTodo.emit(this.todo);
  }
}
