import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInfoCompaniaComponent } from './reg-info-compania.component';

describe('RegInfoCompaniaComponent', () => {
  let component: RegInfoCompaniaComponent;
  let fixture: ComponentFixture<RegInfoCompaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInfoCompaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegInfoCompaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
