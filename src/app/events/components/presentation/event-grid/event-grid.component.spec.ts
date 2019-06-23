import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Event } from 'state/meetup';

import { EventGridComponent } from './event-grid.component';
import { EventComponent } from '../event/event.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { SafePipe } from 'src/app/shared/pipes/safe-pipe.pipe';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

describe('EventGridComponent', () => {
  let component: EventGridComponent;
  let fixture: ComponentFixture<EventGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule, MatCardModule],
      declarations: [EventGridComponent, EventComponent, SafePipe]
    })
      .overrideComponent(EventGridComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGridComponent);
    component = fixture.componentInstance;
    component.events = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when loading', () => {
    beforeEach(() => {
      component.loading = true;
      fixture.detectChanges();
    });

    it('should display a loading spinner if no results', () => {
      const spinner = fixture.debugElement.query(By.css('.spinner-container'));
      expect(spinner).toBeTruthy();
    });

    it('should not display the event grid', () => {
      const grid = fixture.debugElement.query(By.css('.grid-container'));
      expect(grid).toBeNull();
    });
  });

  describe('when there are no events', () => {
    it('should display a message indicating there are no events found', () => {
      const noEvents = fixture.debugElement.query(By.css('.no-events'));
      expect(noEvents.nativeElement.textContent).toBe('No Events Found');
    });

    it('should not display the grid', () => {
      const grid = fixture.debugElement.query(By.css('.grid-container'));
      expect(grid).toBeFalsy();
    });
  });

  describe('when there are events', () => {
    beforeEach(() => {
      const events = getEvents();
      component.events = events;
      fixture.detectChanges();
    });

    it('should display the event grid', () => {
      const grid = fixture.debugElement.query(By.css('.grid-container'));
      expect(grid).toBeTruthy();
    });

    it('should display one event card per event', () => {
      const events = fixture.debugElement.queryAll(By.css('app-event'));
      expect(events.length).toBe(2);
    });

    it('should change the layout when mobile flag is true', () => {
      component.mobile = true;
      fixture.detectChanges();
      const result = fixture.debugElement.query(By.css('.mobile'));
      expect(result).toBeTruthy();
    });
  });
});

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
      id: '257143771',
      link: 'https://www.meetup.com/Angular-Seattle/events/257143771/',
      local_date: '2019-01-18',
      local_time: '18:30',
      name: 'Another Social Thing 🎉',
      status: 'past',
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
