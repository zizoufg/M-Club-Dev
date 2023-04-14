import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HammemComponent } from './hammem.component';

describe('HammemComponent', () => {
  let component: HammemComponent;
  let fixture: ComponentFixture<HammemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HammemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HammemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
