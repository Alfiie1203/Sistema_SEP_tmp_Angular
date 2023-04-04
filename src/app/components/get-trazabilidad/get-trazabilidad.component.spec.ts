import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTrazabilidadComponent } from './get-trazabilidad.component';

describe('GetTrazabilidadComponent', () => {
  let component: GetTrazabilidadComponent;
  let fixture: ComponentFixture<GetTrazabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTrazabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTrazabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
