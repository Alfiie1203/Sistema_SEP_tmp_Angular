import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInfoTambientalesComponent } from './reg-info-tambientales.component';

describe('RegInfoTambientalesComponent', () => {
  let component: RegInfoTambientalesComponent;
  let fixture: ComponentFixture<RegInfoTambientalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInfoTambientalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegInfoTambientalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
