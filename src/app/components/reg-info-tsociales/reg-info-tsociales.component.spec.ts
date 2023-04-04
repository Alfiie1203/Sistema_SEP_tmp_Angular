import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInfoTsocialesComponent } from './reg-info-tsociales.component';

describe('RegInfoTsocialesComponent', () => {
  let component: RegInfoTsocialesComponent;
  let fixture: ComponentFixture<RegInfoTsocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInfoTsocialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegInfoTsocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
