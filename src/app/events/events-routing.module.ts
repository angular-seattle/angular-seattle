import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';

const routes: Routes = [
  {
    path: '',
    component: UpcomingEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {}
