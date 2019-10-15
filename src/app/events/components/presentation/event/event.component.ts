import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Event } from 'state/event/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent {
  /** The event to display */
  @Input() event: Event;
  constructor() {}
}
