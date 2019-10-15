import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { cold } from 'jasmine-marbles';

import { EventStateService } from './event.state.service';
import { Event } from './event.model';
import { of, BehaviorSubject } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

describe('MeetupService', () => {
  let service: EventStateService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventStateService]
    })
  );

  it('should be created', () => {
    service = TestBed.get(EventStateService);
    expect(service).toBeTruthy();
  });

  describe('loading$ getter', () => {
    it('should be an observable of false initially', done => {
      service.loading$.subscribe(result => {
        expect(result).toBe(false);
        done();
      });
    });
  });

  describe('allEvents$ getter', () => {
    it('should init as an observable of an empty array', done => {
      service.allEvents$.subscribe(result => {
        const expected: Event[] = [];
        expect(result).toEqual(expected);
        done();
      });
    });
  });
});

function getEvent(): Event {
  return {
    description: 'This is an event description.',
    id: '257143770',
    link: 'https://www.meetup.com/Angular-Seattle/events/257143770/',
    date: '2018-12-18T17:30:0',
    name: 'A Social Thing 🎉',
    venue: {
      address: '3417 Evanston Avenue North',
      city: 'Seattle',
      country: 'US',
      name: 'SWeL Restaurant'
    }
  };
}

function getEvents(): Event[] {
  return [
    {
      description: 'This is an event description.',
      id: '257143770',
      link: 'https://www.meetup.com/Angular-Seattle/events/257143770/',
      date: '2018-12-18',
      name: 'A Social Thing 🎉',
      venue: {
        address: '3417 Evanston Avenue North',
        city: 'Seattle',
        country: 'US',
        name: 'SWeL Restaurant'
      }
    },
    {
      description: 'This is another event description.',
      id: '257143770',
      link: 'https://www.meetup.com/Angular-Seattle/events/257143771/',
      date: '2019-12-18T20:00:00',
      name: 'A LaterSocial Thing 🎉',
      venue: {
        address: '3417 Evanston Avenue North',
        city: 'Seattle',
        country: 'US',
        name: 'SWeL Restaurant'
      }
    }
  ];
}
