import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiscineComponent } from './piscine.component';

describe('PiscineComponent', () => {
  let component: PiscineComponent;
  let fixture: ComponentFixture<PiscineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiscineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiscineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
