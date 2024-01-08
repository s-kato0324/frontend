import { Component, Input, OnInit } from "@angular/core";
import { Todo } from "../Todo.interface";
import { TodoStatus } from "src/app/constants/enums/todo-status.enum";
import { FormControl, FormGroup } from "@angular/forms";
import { TodoService } from "../todo.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { DialogService } from "../../common/dialog/dialog.service";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-todo-edit",
  templateUrl: "./todo-edit.component.html",
  styleUrls: ["./todo-edit.component.css"],
})
export class TodoEditComponent implements OnInit {
  todo?: Todo = {
    id: "",
    title: "",
    author: "",
    content: "",
    status: TodoStatus.NotStarted,
  };
  routerSubscription: Subscription;

  editForm = new FormGroup({
    title: new FormControl(this.todo?.title),
    author: new FormControl(""),
    content: new FormControl(""),
    status: new FormControl(""),
  });

  isCanceled = false;

  ngOnInit(): void {
    this.routerSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        const id = params["id"];
        this.todo = this.todoService.getTodo(id);
      }
    );
    this.editForm.patchValue({
      title: this.todo?.title,
      author: this.todo?.author,
      content: this.todo?.content,
      status: this.todo?.status.toString(),
    });
  }

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) {
    this.routerSubscription = Subscription.EMPTY;
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  onEditDone() {
    const id = this.todo?.id ? this.todo.id : "1";
    const title = this.editForm.value.title ? this.editForm.value.title : "";
    const author = this.editForm.value.author ? this.editForm.value.author : "";
    const content = this.editForm.value.content
      ? this.editForm.value.content
      : "";
    const status = this.editForm.value.status
      ? +this.editForm.value.status
      : TodoStatus.NotStarted;

    const target: Todo = {
      id: id,
      title: title,
      author: author,
      content: content,
      status: status,
    };
    this.todoService.editTodo(id, target).subscribe((res) => {});
    this.isCanceled = false;
    this.router.navigate(["/todo", id]);
  }

  onEditCancel() {
    this.isCanceled = true;
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  onSubmit() {}

  canDeactivate(): Observable<boolean> | boolean {
    var isChanged = false;

    if (this.todo?.title !== this.editForm.value.title) isChanged = true;
    if (this.todo?.author !== this.editForm.value.author) isChanged = true;
    if (this.todo?.content !== this.editForm.value.content) isChanged = true;
    if (this.todo?.status.toString() !== this.editForm.value.status)
      isChanged = true;

    if (isChanged && this.isCanceled) {
      return this.dialogService.confirm("変更を取り消しますか？");
    }
    return true;
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
