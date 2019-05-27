import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppStateService {
  /**
   * An evaluation to determine if the screen is in handset mode.
   * See https://material.angular.io/cdk/layout/overview for more info
   */
  private isHandsetObs$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  /**
   * An evaluation to determine if the screen is in handset portrait mode.
   * See https://material.angular.io/cdk/layout/overview for more info
   */
  private isHandsetPortraitObs$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.HandsetPortrait)
    .pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}

  /**
   * A state selector that provides a subscription to see if the device is a handset
   * See https://material.angular.io/cdk/layout/overview for more info
   */
  get isHandset$(): Observable<boolean> {
    return this.isHandsetObs$;
  }

  /**
   * A state selector that provides a subscription to see if the device is in handset portrait orientation
   * See https://material.angular.io/cdk/layout/overview for more info
   */
  get isHandsetPortrait$(): Observable<boolean> {
    return this.isHandsetPortraitObs$;
  }
}
