import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AppStateService } from 'state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /** An Observable indicating if the app is being viewed on a handset */
  isHandset$: Observable<boolean>;

  constructor(private appState: AppStateService) {}

  ngOnInit() {
    this.isHandset$ = this.appState.isHandset$;
  }
}
