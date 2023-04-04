import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTrazabilidadComponent } from './listar-trazabilidad.component';

describe('ListarTrazabilidadComponent', () => {
  let component: ListarTrazabilidadComponent;
  let fixture: ComponentFixture<ListarTrazabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTrazabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTrazabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
