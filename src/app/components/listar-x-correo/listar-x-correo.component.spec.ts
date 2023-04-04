import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarXCorreoComponent } from './listar-x-correo.component';

describe('ListarXCorreoComponent', () => {
  let component: ListarXCorreoComponent;
  let fixture: ComponentFixture<ListarXCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarXCorreoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarXCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
