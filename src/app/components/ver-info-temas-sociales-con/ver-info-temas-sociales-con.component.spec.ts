import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoTemasSocialesConComponent } from './ver-info-temas-sociales-con.component';

describe('VerInfoTemasSocialesConComponent', () => {
  let component: VerInfoTemasSocialesConComponent;
  let fixture: ComponentFixture<VerInfoTemasSocialesConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerInfoTemasSocialesConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerInfoTemasSocialesConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
