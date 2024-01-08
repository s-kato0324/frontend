import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PracticeDashboardComponent } from "./practice-dashboard/practice-dashboard.component";
import { NgModelFeatureComponent } from "./practice-dashboard/ng-model-feature/ng-model-feature.component";
import { NgContainerFeatureComponent } from "./practice-dashboard/ng-container-feature/ng-container-feature.component";
import { authGuard } from "../auth/auth.guard";

const practiceRoutes: Routes = [
  {
    path: "",
    // canActivate: [authGuard],
    component: PracticeDashboardComponent,
    children: [
      {
        path: "ng-model-feature",
        component: NgModelFeatureComponent,
      },
      {
        path: "ng-container-feature",
        component: NgContainerFeatureComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(practiceRoutes)],
  exports: [RouterModule],
})
export class PracticeDashboardRoutingModule {}
