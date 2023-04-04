import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInfoFuerzalaboralComponent } from './reg-info-fuerzalaboral.component';

describe('RegInfoFuerzalaboralComponent', () => {
  let component: RegInfoFuerzalaboralComponent;
  let fixture: ComponentFixture<RegInfoFuerzalaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInfoFuerzalaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegInfoFuerzalaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
