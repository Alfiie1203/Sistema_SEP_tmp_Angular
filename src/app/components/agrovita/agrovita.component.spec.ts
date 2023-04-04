import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrovitaComponent } from './agrovita.component';

describe('AgrovitaComponent', () => {
  let component: AgrovitaComponent;
  let fixture: ComponentFixture<AgrovitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrovitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrovitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
