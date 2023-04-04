import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInfoIrfsocialComponent } from './reg-info-irfsocial.component';

describe('RegInfoIrfsocialComponent', () => {
  let component: RegInfoIrfsocialComponent;
  let fixture: ComponentFixture<RegInfoIrfsocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInfoIrfsocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegInfoIrfsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
