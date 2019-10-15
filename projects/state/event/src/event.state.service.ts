import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, map, tap, finalize } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPast, isFuture, compareDesc, parseISO } from 'date-fns';

import { Event } from './event.model';

@Injectable()
export class EventStateService {
  private readonly JSON_URL = '/assets/events/events.json';
  /** Private subject to manage  events */
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
   * A state selector that provides a subscription to all events returned from the JSON lookup
   */
  get allEvents$(): Observable<Event[]> {
    return this.eventsSubject$.asObservable();
  }

  /**
   * A state selector that allows the subscription to a stream containing only events that have yet to occur.
   */
  get upcomingEvents$(): Observable<Event[]> {
    return this.eventsSubject$
      .asObservable()
      .pipe(map(results => results.filter((result: Event) => isFuture(parseISO(result.date)))));
  }

  /**
   * A state selector that allows the subscription to a stream containing only events that are in the past.
   * @param sortByMostRecent Indicates the the events should be emitted as most recent or in chronoligical order (the default).
   */
  pastEvents$(): Observable<Event[]> {
    return this.eventsSubject$
      .asObservable()
      .pipe(map(results => results.filter((result: Event) => isPast(parseISO(result.date)))));
  }

  /**
   * Reads in the events collection locally and publishes them to the eventsSubject.
   * Note: Events are sorted in reverse chronological order (most recent first)
   */
  refreshEvents(): void {
    this.eventsLoadingSubject$.next(true);
    this.http
      .get<Event[]>(this.JSON_URL)
      .pipe(
        map((res: Event[]) =>
          res.sort((event1, event2) => {
            const eventDate1 = parseISO(event1.date);
            const eventDate2 = parseISO(event2.date);
            // sort the events reverse chronologically
            return compareDesc(eventDate1, eventDate2);
          })
        ),
        finalize(() => this.eventsLoadingSubject$.next(false))
      )
      .subscribe((result: Event[]) => this.eventsSubject$.next(result));
  }
}
