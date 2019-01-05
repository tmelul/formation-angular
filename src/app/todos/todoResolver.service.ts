import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Todo} from "../model/todo.model";
import {Observable} from "rxjs";
import {WebApiService} from "./web-api/web-api.service";

@Injectable()
export class TodoResolver implements Resolve<Todo[]> {

  constructor(
    private webApiService: WebApiService,
    private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> | Promise<Todo[]> | Todo[] {
    return this.webApiService.getTodos(1);
  }


}
