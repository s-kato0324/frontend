import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { DialogService } from "src/app/common/dialog/dialog.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: DialogService
  ) {}

  isLogout = false;

  logout() {
    this.isLogout = true;
    this.authService.logout().subscribe();
    this.router.navigate(["/login"]);
  }

  canDeactivate() {
    if (this.isLogout) {
      this.isLogout = false;
      return this.dialog.confirm("ログアウトしますがよろしいでしょうか？");
    }
    return true;
  }
}
