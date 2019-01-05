import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaygroundComponent } from './playground/playground.component';
import { TodosComponent } from './todos/todos.component';
import { TodoResolverService } from './todos/todo-resolver.service';

const routes: Routes = [{
  path: 'playground',
  component: PlaygroundComponent
}, {
  path: 'todos',
  component: TodosComponent,
  resolve: {
    todos: TodoResolverService
  }
}, {
  path: '**',
  redirectTo: 'playground'
}];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
