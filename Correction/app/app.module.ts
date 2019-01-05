import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoComponent } from './todos/todo/todo.component';
import { MaterialModule } from './material.module';
import { TodoListComponent } from './todos/todo-list/todo-list.component';

import { WebApi } from './webapi/web-api';
import { MockWebApiService } from './webapi/mock-web-api.service';
import { TodosComponent } from './todos/todos.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AppRoutingModule } from './app-routing.module';
import { RestWebApiService } from './webapi/rest-web-api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './webapi/loading-interceptor.service';
import { TodoFormComponent } from './todos/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodosComponent,
    PlaygroundComponent,
    TodoFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [{
    provide: WebApi,
    useClass: RestWebApiService
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
