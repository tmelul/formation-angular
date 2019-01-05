import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnChanges {
  @Input() todos: Todo[];
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.todos && changes.todos.previousValue) {
      console.log(`${changes.todos.previousValue.length} todos before, now ${changes.todos.currentValue.length}`);
    }
  }

  onDelete(todo: Todo) {
    console.log('TODO will be deleted');
    this.deleteTodo.emit(todo);
  }

  get doneCount(): number {
    return this.todos.filter((t: Todo) => t.completed).length;
  }
}
