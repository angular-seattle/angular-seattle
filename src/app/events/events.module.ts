import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './components/container/events/events.component';
import { EventGridComponent } from './components/presentation/event-grid/event-grid.component';
import { EventComponent } from './components/presentation/event/event.component';
import { SharedModule } from '../shared/shared.module';
import { EventModule } from 'state/event';
import { StateModule } from 'state';

@NgModule({
  declarations: [EventsComponent, EventGridComponent, EventComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    SharedModule,
    StateModule,
    EventModule
  ]
})
export class EventsModule {}
