import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoTrazabilidadComponent } from './ver-info-trazabilidad.component';

describe('VerInfoTrazabilidadComponent', () => {
  let component: VerInfoTrazabilidadComponent;
  let fixture: ComponentFixture<VerInfoTrazabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerInfoTrazabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerInfoTrazabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
