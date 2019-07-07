import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval, concat } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {
  constructor(private swUpdate: SwUpdate, private appRef: ApplicationRef) {
    if (swUpdate.isEnabled) {
      // Allow the app to stabilize first, before starting polling for updates with `interval()`.
      const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
      const everySixHours$ = interval(6 * 60 * 60 * 1000);
      const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

      everySixHoursOnceAppIsStable$.subscribe(() => swUpdate.checkForUpdate());
    }
  }

  /**
   * A method to force a check of the application to update. If an update is available it will activate it and reload the page
   */
  public checkForUpdate(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => this.swUpdate.activateUpdate().then(() => document.location.reload()));
    }
  }
}
