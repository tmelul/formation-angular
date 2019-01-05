import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../model/todo.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  public todos: Todo[];

  @Output()
  onDeleteTodo = new EventEmitter<Todo>();

  @Output()
  onAddTodo = new EventEmitter<Todo>();

  @Output()
  onDeleteAllCheckedTodo = new EventEmitter();

  form = new FormGroup({
    title: new FormControl('', [ Validators.minLength(2), Validators.required ])
  });

  constructor() {
  }

  ngOnInit() {
  }

  addTodo(): void {
    let newTodo = new Todo(this.todos.length+1, 1, this.form.get('title').value, false);
    this.onAddTodo.emit(newTodo);
  }

  deleteTodo(todoToDelete: Todo) {
    this.onDeleteTodo.emit(todoToDelete);
    console.log(`todo: ${todoToDelete.title} deleted`)
  }

  deleteAllCheckedTodo(){
    this.onDeleteAllCheckedTodo.emit();
  }
}
