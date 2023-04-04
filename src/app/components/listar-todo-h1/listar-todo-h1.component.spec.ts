import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTodoH1Component } from './listar-todo-h1.component';

describe('ListarTodoH1Component', () => {
  let component: ListarTodoH1Component;
  let fixture: ComponentFixture<ListarTodoH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTodoH1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTodoH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
