import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AppStateService } from 'state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /** Indicates if the screen is a handset */
  isHandset$: Observable<boolean>;
  /** Indicates if the screen is in handset portrait mode */
  isHandsetPortrait$: Observable<boolean>;

  constructor(private appState: AppStateService) {}

  ngOnInit() {
    this.isHandset$ = this.appState.isHandset$;
    this.isHandsetPortrait$ = this.appState.isHandsetPortrait$;
  }
}
