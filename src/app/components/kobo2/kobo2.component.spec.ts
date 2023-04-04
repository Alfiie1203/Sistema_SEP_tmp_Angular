import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kobo2Component } from './kobo2.component';

describe('Kobo2Component', () => {
  let component: Kobo2Component;
  let fixture: ComponentFixture<Kobo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kobo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kobo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
