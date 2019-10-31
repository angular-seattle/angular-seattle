import { Component, OnInit } from '@angular/core';

import { MeetupStateService } from 'state/meetup';
import { Observable } from 'rxjs';
import { AppStateService } from 'state';
import { Event } from 'state/meetup/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  /** Upoming events for the group */
  upcomingEvents$: Observable<Event[]>;
  /** Past group events that have already happened */
  pastEvents$: Observable<Event[]>;
  /** Indicator to track if the meetup state service is loading */
  loading$: Observable<boolean>;
  /** Indicates if the current screen is a handset */
  isHandset$: Observable<boolean>;

  constructor(private appState: AppStateService, private eventsState: MeetupStateService) {}

  ngOnInit() {
    this.upcomingEvents$ = this.eventsState.upcomingEvents$;
    this.pastEvents$ = this.eventsState.pastEvents$(true);
    this.loading$ = this.eventsState.loading$;
    this.isHandset$ = this.appState.isHandset$;
    this.eventsState.refreshEvents();
  }
}
