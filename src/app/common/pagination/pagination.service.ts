import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PaginationService {
  pageLimit: string = "10";
  currentPageNumber: number = 0;

  get getPageLimit() {
    return this.pageLimit;
  }

  set setPageLimit(len: string) {
    this.pageLimit = len;
  }

  get getCurrentPageNumber() {
    return this.currentPageNumber;
  }

  set setCurrentPageNumber(num: number) {
    this.currentPageNumber = num;
  }
}
