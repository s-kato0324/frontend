import { Component, OnChanges, SimpleChanges } from "@angular/core";
import { map, tap, timer } from "rxjs";

@Component({
  selector: "app-ng-model-feature",
  templateUrl: "./ng-model-feature.component.html",
  styleUrls: ["./ng-model-feature.component.css"],
})
export class NgModelFeatureComponent {
  red: number = 255;
  green: number = 255;
  blue: number = 255;
  isCopyed: boolean = false;

  getBackGroundColor() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  onCopy() {
    let hexRed = this.red.toString(16).padStart(2, "0");
    let hexGreen = this.green.toString(16).padStart(2, "0");
    let hexBlue = this.blue.toString(16).padStart(2, "0");
    let colorCode = "#" + hexRed + hexGreen + hexBlue;
    navigator.clipboard.writeText(colorCode);

    this.isCopyed = true;
    timer(800).subscribe(() => {
      this.isCopyed = false;
    });
  }
}
