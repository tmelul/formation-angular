import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Todo} from "../../model/todo.model";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnChanges {

  @Input()
  public todos: Todo[];

  nbCharactsTot: number = 0;
  reducer = (accumulator, currentValue) => accumulator + currentValue;

  constructor() { }

  ngOnInit() {
    this.refreshNbCharactsTot();
  }

  ngOnChanges(changedInputs: SimpleChanges) {
    for (let propName in changedInputs) {
      if(propName === 'todos') {
        let input = changedInputs[propName];
        if(input.currentValue && input.previousValue) {
          const previousValue: Todo[] = input.previousValue;
          const currentValue: Todo[] = input.currentValue;
          console.log(previousValue.length);
          console.log(currentValue.length);
        }
      }
    }
    this.refreshNbCharactsTot();
  }

  refreshNbCharactsTot() {
    if(this.todos.length !== 0) {
      const allTodoTitresLength: number[] = [];
      this.todos.forEach(todo => allTodoTitresLength.push(todo.title.length));
      this.nbCharactsTot = allTodoTitresLength.reduce(this.reducer);
    }else {
      this.nbCharactsTot = 0;
    }
  }

  getCheckedTodos(todos: Todo[]): number {
    return todos.filter(todo => todo.completed === true).length;
  }
}
