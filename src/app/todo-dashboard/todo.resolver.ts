import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { Todo } from "./Todo.interface";
import { inject } from "@angular/core";
import { TodoService } from "./todo.service";

export const todoListResolver: ResolveFn<Todo[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log("called resolver");
  return inject(TodoService).fetchData();
};
