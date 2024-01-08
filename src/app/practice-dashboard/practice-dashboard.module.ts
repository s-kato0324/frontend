import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PracticeDashboardComponent } from "./practice-dashboard/practice-dashboard.component";
import { PracticeDashboardRoutingModule } from "./practice-dashboard-routing.module";
import { NgModelFeatureComponent } from "./practice-dashboard/ng-model-feature/ng-model-feature.component";
import { FormsModule } from "@angular/forms";
import { NgContainerFeatureComponent } from './practice-dashboard/ng-container-feature/ng-container-feature.component';

@NgModule({
  declarations: [PracticeDashboardComponent, NgModelFeatureComponent, NgContainerFeatureComponent],
  imports: [CommonModule, FormsModule, PracticeDashboardRoutingModule],
})
export class PracticeDashboardModule {}
