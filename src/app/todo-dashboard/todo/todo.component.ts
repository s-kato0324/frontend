import { Component, Input } from "@angular/core";
import { Todo } from "../Todo.interface";
import { TodoStatus } from "src/app/constants/enums/todo-status.enum";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent {
  @Input() todo: Todo = {
    id: "",
    title: "",
    author: "",
    content: "",
    status: TodoStatus.NotStarted,
  };

  getColor(id: number) {
    var color = "";
    if (id === TodoStatus.NotStarted) color = "#ef7f74";
    if (id === TodoStatus.InProgress) color = "#4187c7";
    if (id === TodoStatus.Completed) color = "#b0bf2e";
    if (id === TodoStatus.OnHold) color = "#808db7";
    if (id === TodoStatus.Cancelled) color = "#f62755";
    return color;
  }
}
