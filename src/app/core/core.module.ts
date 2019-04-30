import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinksComponent } from './components/nav-links/nav-links.component';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [NavLinksComponent],
  imports: [CommonModule, MatListModule],
  exports: [NavLinksComponent]
})
export class CoreModule {}
