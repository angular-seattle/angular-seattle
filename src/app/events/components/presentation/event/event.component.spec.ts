import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { of } from 'rxjs';

import { EventsComponent } from '../../container/events/events.component';
import { AppStateService } from 'state';
import { MeetupStateService } from 'state/meetup';
import { EventGridComponent } from '../../presentation/event-grid/event-grid.component';
import { EventComponent } from './event.component';
import { SafePipe } from 'src/app/shared/pipes/safe-pipe.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;
  const mockAppStateService = {
    get isHandset$() {
      return of(false);
    }
  };
  const mockMeetupStateService = {
    get upcomingEvents$() {
      return of([]);
    },
    pastEvents$(val) {
      return of([]);
    },
    get loading$() {
      return of(false);
    },
    refreshEvents: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule, MatCardModule],
      declarations: [EventsComponent, EventGridComponent, EventComponent, SafePipe],
      providers: [
        { provide: AppStateService, useValue: mockAppStateService },
        { provide: MeetupStateService, useValue: mockMeetupStateService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call the MeetupStateService', () => {
      const service = TestBed.get(MeetupStateService);
      const spy = spyOn(service, 'refreshEvents');
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });
  });
});
