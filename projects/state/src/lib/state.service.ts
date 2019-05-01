import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  private isHandsetPortrait$: Observable<
    boolean
  > = this.breakpointObserver
    .observe(Breakpoints.HandsetPortrait)
    .pipe(map((result) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}

  get isHandset(): Observable<boolean> {
    return this.isHandset$;
  }

  get isHandsetPortrait(): Observable<boolean> {
    return this.isHandsetPortrait$;
  }
}
