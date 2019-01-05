import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

export abstract class WebApi {
  abstract getTodos(userId: number): Observable<Todo[]>;
  abstract deleteTodo(id: number): Observable<void>;
  abstract createTodo(todo: Todo): Observable<Todo>;
}
