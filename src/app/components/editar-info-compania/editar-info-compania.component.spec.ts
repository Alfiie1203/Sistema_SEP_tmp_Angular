import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInfoCompaniaComponent } from './editar-info-compania.component';

describe('EditarInfoCompaniaComponent', () => {
  let component: EditarInfoCompaniaComponent;
  let fixture: ComponentFixture<EditarInfoCompaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInfoCompaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInfoCompaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
