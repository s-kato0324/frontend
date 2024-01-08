import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { TodoService } from "../todo.service";
import { Router } from "@angular/router";
import { Todo } from "../Todo.interface";
import { TodoStatus } from "src/app/constants/enums/todo-status.enum";

@Component({
  selector: "app-todo-create",
  templateUrl: "./todo-create.component.html",
  styleUrls: ["./todo-create.component.css"],
})
export class TodoCreateComponent implements OnInit {
  createForm = new FormGroup({
    title: new FormControl(""),
    author: new FormControl(""),
    content: new FormControl(""),
  });

  isCanceled: boolean = false;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    console.log("called create");
  }

  onCreateDone() {
    const id = (this.todoService.getMaxIndex() + 1).toString();
    const title = this.createForm.value.title
      ? this.createForm.value.title
      : "";
    const author = this.createForm.value.author
      ? this.createForm.value.author
      : "";
    const description = this.createForm.value.content
      ? this.createForm.value.content
      : "";
    const target: Todo = {
      id: id,
      title: title,
      author: author,
      content: description,
      status: TodoStatus.NotStarted,
    };
    if (!this.isCanceled) {
      this.todoService.createTodo(target).subscribe(
        (res) => {
          console.log("res:", res);
        },
        (error) => {
          console.log("error: ", error);
        }
      );
    }

    this.router.navigate(["/todo"]);
  }

  onCreateCancel() {
    console.log("create cancel");
    this.isCanceled = true;
  }
}
