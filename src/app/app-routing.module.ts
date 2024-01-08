import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { authGuard } from "./auth/auth.guard";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    canActivate: [authGuard],
  },
  {
    path: "main",
    loadChildren: () =>
      import("./main-dashboard/main-dashboard.module").then(
        (m) => m.MainDashboardModule
      ),
  },
  {
    path: "aws-architecture",
    loadChildren: () =>
      import(
        "./aws-architecture-dashboard/aws-architecture-dashboard.module"
      ).then((m) => m.AwsArchitectureDashboardModule),
  },
  {
    path: "homepage",
    loadChildren: () =>
      import("./homepage-dashboard/homepage-dashboard.module").then(
        (m) => m.HomepageDashboardModule
      ),
  },
  {
    path: "login",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "todo",
    loadChildren: () =>
      import("./todo-dashboard/todo-dashboard.module").then(
        (m) => m.TodoDashboardModule
      ),
  },
  {
    path: "practice",
    loadChildren: () =>
      import("./practice-dashboard/practice-dashboard.module").then(
        (m) => m.PracticeDashboardModule
      ),
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
