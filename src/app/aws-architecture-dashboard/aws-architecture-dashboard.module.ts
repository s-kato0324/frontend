import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AwsArchitectureDashboardComponent } from "./aws-architecture-dashboard/aws-architecture-dashboard.component";
import { AwsArchitectureRoutingModule } from "./aws-architecture-routing.module";
import { FrontendArchitectureComponent } from './frontend-architecture/frontend-architecture.component';
import { BackendArchitectureComponent } from './backend-architecture/backend-architecture.component';

@NgModule({
  declarations: [AwsArchitectureDashboardComponent, FrontendArchitectureComponent, BackendArchitectureComponent],
  imports: [CommonModule, AwsArchitectureRoutingModule],
})
export class AwsArchitectureDashboardModule {}
