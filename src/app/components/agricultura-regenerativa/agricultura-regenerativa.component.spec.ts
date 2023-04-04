import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturaRegenerativaComponent } from './agricultura-regenerativa.component';

describe('AgriculturaRegenerativaComponent', () => {
  let component: AgriculturaRegenerativaComponent;
  let fixture: ComponentFixture<AgriculturaRegenerativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriculturaRegenerativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriculturaRegenerativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
