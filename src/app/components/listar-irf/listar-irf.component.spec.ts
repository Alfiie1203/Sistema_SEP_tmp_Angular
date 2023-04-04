import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIrfComponent } from './listar-irf.component';

describe('ListarIrfComponent', () => {
  let component: ListarIrfComponent;
  let fixture: ComponentFixture<ListarIrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarIrfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarIrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
