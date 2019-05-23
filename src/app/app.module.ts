import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { StateModule } from 'state';
import { NavLinksComponent } from './nav-links/nav-links.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavLinksComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    StateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
