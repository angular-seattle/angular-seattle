import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { of } from 'rxjs';

import { EventsComponent } from './events.component';
import { AppStateService } from 'state';
import { EventGridComponent } from '../../presentation/event-grid/event-grid.component';
import { EventComponent } from '../../presentation/event/event.component';
import { SafePipe } from 'src/app/shared/pipes/safe-pipe.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EventStateService } from 'state/event';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;
  const mockAppStateService = {
    get isHandset$() {
      return of(false);
    }
  };
  const mockEventStateService = {
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
        { provide: EventStateService, useValue: mockEventStateService }
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
      const service = TestBed.get(EventStateService);
      const spy = spyOn(service, 'refreshEvents');
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });
  });
});
