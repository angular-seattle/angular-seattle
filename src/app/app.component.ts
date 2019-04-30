import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StateService } from 'state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean>;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.isHandset$ = this.stateService.isHandset;
  }
}
