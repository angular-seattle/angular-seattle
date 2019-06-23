import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MeetupStateService } from './meetup.state.service';
import { Event } from './event.model';

describe('MeetupService', () => {
  let service: MeetupStateService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MeetupStateService]
    })
  );

  it('should be created', () => {
    service = TestBed.get(MeetupStateService);
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
    description: '<p>This is an event description.</p>',
    id: '257143770',
    link: 'https://www.meetup.com/Angular-Seattle/events/257143770/',
    local_date: '2018-12-18',
    local_time: '18:30',
    name: 'A Social Thing 🎉',
    status: 'past',
    venue: {
      address_1: '3417 Evanston Avenue North',
      city: 'Seattle',
      country: 'US',
      id: 25643266,
      localized_country_name: 'USA',
      name: 'SWeL Restaurant'
    }
  };
}

function getEvents(): Event[] {
  return [
    {
      description: '<p>This is an event description.</p>',
      id: '257143770',
      link: 'https://www.meetup.com/Angular-Seattle/events/257143770/',
      local_date: '2018-12-18',
      local_time: '18:30',
      name: 'A Social Thing 🎉',
      status: 'past',
      venue: {
        address_1: '3417 Evanston Avenue North',
        city: 'Seattle',
        country: 'US',
        id: 25643266,
        localized_country_name: 'USA',
        name: 'SWeL Restaurant'
      }
    },
    {
      description: '<p>This is another event description.</p>',
      id: '257143770',
      link: 'https://www.meetup.com/Angular-Seattle/events/257143771/',
      local_date: '2019-12-18',
      local_time: '18:30',
      name: 'A LaterSocial Thing 🎉',
      status: 'upcoming',
      venue: {
        address_1: '3417 Evanston Avenue North',
        city: 'Seattle',
        country: 'US',
        id: 25643266,
        localized_country_name: 'USA',
        name: 'SWeL Restaurant'
      }
    }
  ];
}
