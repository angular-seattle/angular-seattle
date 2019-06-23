import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { AppStateService } from 'state';

class MockAppStateService {
  isHandset$ = of(false);
  isHandsetPortrait$ = of(false);

  setIsHandset(val: boolean) {
    this.isHandset$ = of(val);
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockAppStateService: AppStateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: AppStateService, useValue: MockAppStateService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    mockAppStateService = TestBed.get(AppStateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the mobile class if on mobile', () => {
    component.isHandset$ = of(true);
    // todo figure out how to mock this.
    fixture.detectChanges();

    const elem = fixture.debugElement.query(By.css('.mobile'));
    expect(elem).toBeTruthy();
  });

  it('should add the handset-portrait class if on mobile portrait', () => {
    component.isHandsetPortrait$ = of(true);
    // todo figure out how to mock this.
    fixture.detectChanges();

    const elem = fixture.debugElement.query(By.css('.handset-portrait'));
    expect(elem).toBeTruthy();
  });
});
