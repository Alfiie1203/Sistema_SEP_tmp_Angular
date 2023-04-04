import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoGobernanzaComponent } from './ver-info-gobernanza.component';

describe('VerInfoGobernanzaComponent', () => {
  let component: VerInfoGobernanzaComponent;
  let fixture: ComponentFixture<VerInfoGobernanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerInfoGobernanzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerInfoGobernanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
