import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StateService } from 'state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isHandset$: Observable<boolean>;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.isHandset$ = this.stateService.isHandset;
  }
}
