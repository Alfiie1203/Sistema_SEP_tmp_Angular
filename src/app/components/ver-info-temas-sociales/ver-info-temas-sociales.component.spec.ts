import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoTemasSocialesComponent } from './ver-info-temas-sociales.component';

describe('VerInfoTemasSocialesComponent', () => {
  let component: VerInfoTemasSocialesComponent;
  let fixture: ComponentFixture<VerInfoTemasSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerInfoTemasSocialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerInfoTemasSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
