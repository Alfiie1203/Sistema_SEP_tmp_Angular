import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoTemasAmbientalesComponent } from './ver-info-temas-ambientales.component';

describe('VerInfoTemasAmbientalesComponent', () => {
  let component: VerInfoTemasAmbientalesComponent;
  let fixture: ComponentFixture<VerInfoTemasAmbientalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerInfoTemasAmbientalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerInfoTemasAmbientalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
