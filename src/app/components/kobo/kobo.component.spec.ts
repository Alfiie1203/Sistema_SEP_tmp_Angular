import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoboComponent } from './kobo.component';

describe('KoboComponent', () => {
  let component: KoboComponent;
  let fixture: ComponentFixture<KoboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
