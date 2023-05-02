import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentDashboardComponent } from './adherent-dashboard.component';

describe('AdherentDashboardComponent', () => {
  let component: AdherentDashboardComponent;
  let fixture: ComponentFixture<AdherentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdherentDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
