import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const authRoutes: Routes = [{ path: "", component: LoginComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
