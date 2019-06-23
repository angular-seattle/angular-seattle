import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinksComponent } from './nav-links.component';
import { MatListModule } from '@angular/material/list';
import { By } from '@angular/platform-browser';

describe('NavLinksComponent', () => {
  let component: NavLinksComponent;
  let fixture: ComponentFixture<NavLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [NavLinksComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLinksComponent);
    component = fixture.componentInstance;
    component.horizontal = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the links horizontally when horizontal is true', () => {
    component.horizontal = true;
    fixture.detectChanges();

    const elem = fixture.debugElement.query(By.css('.list-horizontal'));
    expect(elem).toBeTruthy();
  });
});
