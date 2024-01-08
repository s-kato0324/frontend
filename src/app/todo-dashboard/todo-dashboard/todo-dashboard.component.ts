import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Todo } from "../Todo.interface";
import { Subscription } from "rxjs";
import { PaginationService } from "src/app/common/pagination/pagination.service";

@Component({
  selector: "app-todo-dashboard",
  templateUrl: "./todo-dashboard.component.html",
  styleUrls: ["./todo-dashboard.component.css"],
})
export class TodoDashboardComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  todoList: Todo[] = [];
  currentTodoList: Todo[] = [];
  limit: string = "10";
  currentPage: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private paginationService: PaginationService
  ) {
    this.subscription = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.data.subscribe(({ todo }) => {
      this.todoList = todo;
    });
    this.currentTodoList = this.todoList.slice(0, +this.limit);
  }

  onCreate() {
    this.router.navigate(["create"], { relativeTo: this.activatedRoute });
  }

  updateLimit(newLimit: string) {
    this.limit = newLimit;
    this.currentPage = 0;
    this.getRange();
    this.setPaginationInfo();
  }

  getCountList(): number {
    return Math.ceil(this.todoList.length / +this.limit);
  }

  getPagesCountList(): number[] {
    return [...Array(this.getCountList()).keys()].map((el) => el + 1);
  }

  // 現在のページを取得する
  getCurrentPage(index: number) {
    this.currentPage = index - 1;
    this.paginationService.setCurrentPageNumber = this.currentPage;
    this.getRange();
  }

  // 表示するする一覧を取得
  getRange() {
    const start = this.currentPage * parseInt(this.limit);
    const end = start + parseInt(this.limit);
    console.log(start, end);
    this.currentTodoList = this.todoList.slice(start, end);
  }

  setPaginationInfo() {
    this.paginationService.setPageLimit = this.limit;
    this.paginationService.setCurrentPageNumber = this.currentPage;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
