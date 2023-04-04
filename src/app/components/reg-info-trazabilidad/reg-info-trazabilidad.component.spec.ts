import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInfoTrazabilidadComponent } from './reg-info-trazabilidad.component';

describe('RegInfoTrazabilidadComponent', () => {
  let component: RegInfoTrazabilidadComponent;
  let fixture: ComponentFixture<RegInfoTrazabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInfoTrazabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegInfoTrazabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
