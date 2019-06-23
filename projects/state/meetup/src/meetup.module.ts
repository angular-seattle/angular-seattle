import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetupStateService } from './meetup.state.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, HttpClientJsonpModule],
  providers: [MeetupStateService]
})
export class MeetupModule {}
