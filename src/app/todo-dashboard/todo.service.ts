import { Injectable } from "@angular/core";
import { Todo } from "./Todo.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Subject, catchError, map, take, tap } from "rxjs";
import { TodoStatus } from "../constants/enums/todo-status.enum";
import { environment } from "src/environments/environment";
import { TodoSessionService } from "./todo-session.service";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  URL: string = environment.apiUrl + "/todo";

  todoListSub = new BehaviorSubject<Todo[]>([]);

  currentTodo: Todo = {
    id: "",
    title: "",
    author: "",
    content: "",
    status: TodoStatus.NotStarted,
  };

  constructor(
    private http: HttpClient,
    private todoSession: TodoSessionService
  ) {}

  setTodoList(todoList: Todo[]) {
    this.todoListSub.next(todoList);
  }

  fetchData() {
    console.log(this.URL);
    return this.http.get<Todo[]>(this.URL).pipe(
      map((items) => {
        return items;
      }),
      tap((items) => {
        this.setTodoList(items);
      })
    );
  }

  getTodo(id: string) {
    var tmp: Todo[] = [];
    this.todoListSub.subscribe((items) => (tmp = items));
    return tmp.find((e) => e.id === id);
  }

  getMaxIndex(): number {
    var tmp: Todo[] = [];
    this.todoListSub.subscribe((items) => (tmp = items));
    return +tmp[tmp.length - 1].id;
  }

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  editTodo(id: string, target: Todo) {
    console.log(id, target, `${this.URL}/${id}`);
    return this.http.put(`${this.URL}/${id}`, target, this.httpOptions).pipe(
      tap((items) => {
        console.log("edit item :", items);
      })
    );
  }

  createTodo(target: Todo) {
    console.log("create target :", target);
    return this.http.post(this.URL, target, this.httpOptions);
  }

  deleteTodo(id: string) {
    console.log("delete todo", id);
    return this.http.delete(`${this.URL}/${id}`, this.httpOptions);
  }
}
