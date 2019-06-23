import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';
import { MatCardModule } from '@angular/material/card';
import { SafePipe } from 'src/app/shared/pipes/safe-pipe.pipe';
import { Event } from 'state/meetup/public_api';

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

  describe('getTrimmedEventText', () => {
    it('should return the first paragraph of the string', () => {
      const description = `
        <p>This is the first paragraph tag</p>
        <p>This is the second paragraph tag</p>
      `;
      const result = component.getTrimmedEventText(description);
      expect(result).toBe('<p>This is the first paragraph tag</p>');
    });

    it('should return a message indicating no description if none exists', () => {
      const expected = '<i>No description</i>';
      const description = 'A description without paragraphs should never be returned by the state';

      const result = component.getTrimmedEventText(description);
      expect(result).toBe(expected);
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
