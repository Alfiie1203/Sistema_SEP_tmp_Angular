import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInfoTsocialesConComponent } from './reg-info-tsociales-con.component';

describe('RegInfoTsocialesConComponent', () => {
  let component: RegInfoTsocialesConComponent;
  let fixture: ComponentFixture<RegInfoTsocialesConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInfoTsocialesConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegInfoTsocialesConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
