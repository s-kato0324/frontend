import { Component } from "@angular/core";

@Component({
  selector: "app-ng-container-feature",
  templateUrl: "./ng-container-feature.component.html",
  styleUrls: ["./ng-container-feature.component.css"],
})
export class NgContainerFeatureComponent {
  condition: boolean = true;

  onChangeCondition() {
    this.condition = !this.condition;
  }
}
