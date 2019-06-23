import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, map, tap, finalize } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { Event } from './event.model';

@Injectable()
export class MeetupStateService {
  private readonly MEETUP_EVENT_URL =
    'https://api.meetup.com/angular-seattle/events?&sign=true&photo-host=public&status=past,upcoming';
  /** Private subject to manage Meetup events */
  private eventsSubject$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);
  /** Private subject to manage the loading state */
  private eventsLoadingSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  /**
   * Indicates if processing is happening that relates to the Meetup state.
   */
  get loading$(): Observable<boolean> {
    return this.eventsLoadingSubject$.asObservable();
  }

  /**
   * A state selector that provides a subscription to all events returned from the Meetup API
   */
  get allEvents$(): Observable<Event[]> {
    return this.eventsSubject$.asObservable();
  }

  /**
   * A state selector that allows the subscription to a stream containing only events that have yet to occur.
   */
  get upcomingEvents$(): Observable<Event[]> {
    return this.eventsSubject$.asObservable().pipe(map(results => results.filter(result => result.status !== 'past')));
  }

  /**
   * A state selector that allows the subscription to a stream containing only events that are in the past.
   * @param sortByMostRecent Indicates the the events should be emitted as most recent or in chronoligical order (the default).
   */
  pastEvents$(sortByMostRecent: boolean): Observable<Event[]> {
    return this.eventsSubject$.asObservable().pipe(
      map(results => results.filter(result => result.status === 'past')),
      // the meetup api returns events in chronological order. To sort by most recent just reverse the result set
      map(events => (sortByMostRecent ? events.reverse() : events))
    );
  }

  /**
   * Executes a JSONP call to the Metup.com API then emits the results in the eventsSubject$.
   * Note: we perform a JSONP call instead of GET due to restrictions from the Meetup API
   */
  refreshEvents(): void {
    this.eventsLoadingSubject$.next(true);
    this.http
      .jsonp<{ meta: any; data: Event[] }>(this.MEETUP_EVENT_URL, 'callback')
      .pipe(
        take(1),
        map(res => res.data),
        finalize(() => this.eventsLoadingSubject$.next(false))
      )
      .subscribe((result: Event[]) => this.eventsSubject$.next(result));
  }
}
