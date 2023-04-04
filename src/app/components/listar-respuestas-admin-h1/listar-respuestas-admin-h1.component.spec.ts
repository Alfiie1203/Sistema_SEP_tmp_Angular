import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRespuestasAdminH1Component } from './listar-respuestas-admin-h1.component';

describe('ListarRespuestasAdminH1Component', () => {
  let component: ListarRespuestasAdminH1Component;
  let fixture: ComponentFixture<ListarRespuestasAdminH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRespuestasAdminH1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarRespuestasAdminH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
