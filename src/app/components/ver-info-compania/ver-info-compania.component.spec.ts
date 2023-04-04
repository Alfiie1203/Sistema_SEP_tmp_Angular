import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoCompaniaComponent } from './ver-info-compania.component';

describe('VerInfoCompaniaComponent', () => {
  let component: VerInfoCompaniaComponent;
  let fixture: ComponentFixture<VerInfoCompaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerInfoCompaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerInfoCompaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
