import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Event } from 'state/meetup/event.model';

@Component({
  selector: 'app-event-grid',
  templateUrl: './event-grid.component.html',
  styleUrls: ['./event-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventGridComponent {
  /** The events to be displayed */
  @Input() events: Event[] = [];
  /** A flag indicating whether to display a loading indicator */
  @Input() loading: boolean;
  /** A flag indicating if the app is being viewed on mobile */
  @Input() mobile: boolean;

  constructor() {}
}
