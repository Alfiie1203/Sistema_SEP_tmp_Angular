import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUserXavanceComponent } from './listar-user-xavance.component';

describe('ListarUserXavanceComponent', () => {
  let component: ListarUserXavanceComponent;
  let fixture: ComponentFixture<ListarUserXavanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUserXavanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarUserXavanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
