import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";
import { TodoSession } from "./todo-session.interface";
import { tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodoSessionService {
  URL: string = environment.apiUrl + "/todo/get-session";

  constructor(private http: HttpClient, private cookieService: CookieService) {}
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  manageSession() {
    const sessionId = this.getCookie("session_id");
    const username = "test";
    const todoSession: TodoSession = {
      sessionId: sessionId,
      username: username,
    };
    console.log(todoSession);
    console.log(this.URL);
    this.http.post(this.URL, todoSession, this.httpOptions).pipe(
      tap((res) => {
        console.log(res);
      })
    );
  }

  getCookie(key: string): string {
    const cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].split("=");
      if (cookie[0] === key) return cookie[1];
    }
    return "";
  }
}
