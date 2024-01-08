import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay, map, of, tap } from "rxjs";
import { environment } from "src/environments/environment.development";
import { Login } from "./login/login.interface";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn = false;
  apiURL: string = environment.apiUrl;

  login(login: Login) {
    return this.http.post(`${this.apiURL}/login`, login).pipe(
      tap((state) => {
        this.isLoggedIn = true;
      })
    );
  }

  // login(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(0),
  //     tap(() => (this.isLoggedIn = true))
  //   );
  // }

  logout() {
    let sessionValue = this.getCookie("session_id");
    this.cookieService.set("session_id", sessionValue);
    return this.http.get(`${this.apiURL}/logout`).pipe(
      tap((res) => {
        console.log("logout");
        this.isLoggedIn = false;
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

  constructor(private http: HttpClient, private cookieService: CookieService) {}
}
