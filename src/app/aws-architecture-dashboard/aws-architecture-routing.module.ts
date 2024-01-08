import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AwsArchitectureDashboardComponent } from "./aws-architecture-dashboard/aws-architecture-dashboard.component";
import { FrontendArchitectureComponent } from "./frontend-architecture/frontend-architecture.component";
import { BackendArchitectureComponent } from "./backend-architecture/backend-architecture.component";

const awsArchitectureRoutes: Routes = [
  {
    path: "",
    component: AwsArchitectureDashboardComponent,
    children: [
      {
        path: "frontend",
        component: FrontendArchitectureComponent,
      },
      {
        path: "backend",
        component: BackendArchitectureComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(awsArchitectureRoutes)],
  exports: [RouterModule],
})
export class AwsArchitectureRoutingModule {}
