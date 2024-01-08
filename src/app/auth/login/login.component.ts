import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Login } from "./login.interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // ログインフォーム
  loginForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.maxLength(64),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.maxLength(64),
    ]),
  });

  errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log("called login component");
  }

  login() {
    console.log("before login", this.authService.isLoggedIn);
    console.log(this.loginForm.value);

    this.authService
      .login({
        username: this.loginForm.value.username ?? "",
        password: this.loginForm.value.password ?? "",
      })
      .subscribe(
        (state) => {
          console.log("state", state);
          if (this.authService.isLoggedIn) {
            this.router.navigate(["/main"]);
          }
        },
        (error) => {
          this.errorMessage = error.error.error;
          console.log("error: ", error.error.error);
        }
      );
    console.log("after login", this.authService.isLoggedIn);
  }

  get getUsernameInValid() {
    return (
      !this.loginForm.get("username")?.valid &&
      this.loginForm.get("username")?.touched
    );
  }

  get getUsernameErrorMessage() {
    var errorMessage = "";
    if (this.loginForm.get("username")?.errors?.["required"])
      errorMessage = "Enter Username";
    if (this.loginForm.get("username")?.errors?.["maxlength"])
      errorMessage = "Please enter no more than 64 characters.";
    return errorMessage;
  }

  get getPasswordInValid() {
    return (
      !this.loginForm.get("password")?.valid &&
      this.loginForm.get("password")?.touched
    );
  }

  get getPasswordErrorMessage() {
    var errorMessage = "";
    if (this.loginForm.get("password")?.errors?.["required"])
      errorMessage = "Enter Password";
    if (this.loginForm.get("password")?.errors?.["maxlength"])
      errorMessage = "Please enter no more than 64 characters.";
    return errorMessage;
  }
}
