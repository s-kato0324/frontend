import { Component, OnDestroy, OnInit } from "@angular/core";
import { Todo } from "../Todo.interface";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { TodoService } from "../todo.service";
import { TodoStatus } from "src/app/constants/enums/todo-status.enum";

@Component({
  selector: "app-todo-detail",
  templateUrl: "./todo-detail.component.html",
  styleUrls: ["./todo-detail.component.css"],
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  todo?: Todo = {
    id: "",
    title: "",
    author: "",
    content: "",
    status: TodoStatus.NotStarted,
  };
  id: string = "";
  routerSubscription: Subscription;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {
    this.routerSubscription = Subscription.EMPTY;
    this.subscription = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.routerSubscription = this.route.params.subscribe((params: Params) => {
      console.log("detail params:", params);
      this.id = params["id"];
      this.todo = this.todoService.getTodo(this.id);
    });
  }

  getColor(id: number = 0) {
    var color = "";
    if (id === TodoStatus.NotStarted) color = "#ef7f74";
    if (id === TodoStatus.InProgress) color = "#4187c7";
    if (id === TodoStatus.Completed) color = "#b0bf2e";
    if (id === TodoStatus.OnHold) color = "#808db7";
    if (id === TodoStatus.Cancelled) color = "#f62755";
    return color;
  }

  onEdit() {
    console.log(this.route);
    this.router.navigate(["edit"], {
      relativeTo: this.route,
      queryParams: { id: this.todo?.id },
    });
  }

  onDelete() {
    this.subscription = this.todoService.deleteTodo(this.id).subscribe();
    this.router.navigate(["todo"]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
