import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRespuestasAdminComponent } from './listar-respuestas-admin.component';

describe('ListarRespuestasAdminComponent', () => {
  let component: ListarRespuestasAdminComponent;
  let fixture: ComponentFixture<ListarRespuestasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRespuestasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarRespuestasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
