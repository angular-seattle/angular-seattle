import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';
import { MatCardModule } from '@angular/material/card';
import { SafePipe } from 'src/app/shared/pipes/safe-pipe.pipe';
import { Event } from 'state/event';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [EventComponent, SafePipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    const event = getEvent();
    component = fixture.componentInstance;
    component.event = event;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function getEvent(): Event {
  return {
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
  };
}
