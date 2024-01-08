import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from "@angular/router";
import { MainComponent } from "../main.component";
import { Observable } from "rxjs";

export const logoutCanDeactivateGuard: CanDeactivateFn<MainComponent> = (
  component: MainComponent,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | boolean => {
  if (component.canDeactivate) {
    return component.canDeactivate();
  }
  return true;
};
