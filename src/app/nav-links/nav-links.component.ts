import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent {
  /** Indicates whether to display the nav links horizontally or vertically */
  @Input() horizontal: boolean;

  constructor() {}
}
