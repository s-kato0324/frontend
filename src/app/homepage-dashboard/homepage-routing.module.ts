import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomepageDashboardComponent } from "./homepage-dashboard/homepage-dashboard.component";
import { Homepage1Component } from "./homepage1/homepage1.component";
import { authGuard } from "../auth/auth.guard";

const homepageRoutes: Routes = [
  {
    path: "",
    canActivate: [authGuard],
    component: HomepageDashboardComponent,
  },
  { path: "homepage1", component: Homepage1Component },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(homepageRoutes)],
  exports: [RouterModule],
})
export class HomepageRougtingModule {}
