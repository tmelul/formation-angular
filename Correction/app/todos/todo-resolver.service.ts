import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Todo } from 'src/app/model/todo';
import { WebApi } from 'src/app/webapi/web-api';

@Injectable({
  providedIn: 'root'
})
export class TodoResolverService implements Resolve<Todo[]> {

  constructor(private readonly api: WebApi) {}

  resolve(): Observable<Todo[]> {
    return this.api.getTodos(1);
  }
}
