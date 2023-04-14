import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuvetteComponent } from './buvette.component';

describe('BuvetteComponent', () => {
  let component: BuvetteComponent;
  let fixture: ComponentFixture<BuvetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuvetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuvetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
