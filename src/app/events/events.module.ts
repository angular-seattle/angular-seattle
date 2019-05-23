import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';

@NgModule({
  declarations: [UpcomingEventsComponent],
  imports: [CommonModule, EventsRoutingModule]
})
export class EventsModule {}
