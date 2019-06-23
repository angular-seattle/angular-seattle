import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Event } from 'state/meetup/event.model';

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

  /**
   * Takes an event description (expected to be HTML) and returns the first paragraph for display.
   * If no paragraph tags are found returns a message to display to the user indicating no description.
   * @param text the event descrtiption to be trimmed
   */
  getTrimmedEventText(text: string): string {
    const description = text.match(/<p>.*?<\/p>/i);
    return description ? description[0] : '<i>No description</i>';
  }
}
