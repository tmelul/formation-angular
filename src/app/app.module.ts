import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoComponent} from './todos/todo/todo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {TodoListComponent} from "./todos/todo-list/todo-list.component";
import {WebApiService} from "./todos/web-api/web-api.service";
import {TodosComponent} from './todos/todos.component';
import {PlaygroundComponent} from './todos/playground/playground.component';
import {HomeComponent} from './home/home.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodosComponent,
    PlaygroundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: WebApiService, useClass: WebApiService},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
