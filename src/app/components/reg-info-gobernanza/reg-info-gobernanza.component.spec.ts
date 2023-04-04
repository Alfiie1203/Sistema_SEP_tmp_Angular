import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInfoGobernanzaComponent } from './reg-info-gobernanza.component';

describe('RegInfoGobernanzaComponent', () => {
  let component: RegInfoGobernanzaComponent;
  let fixture: ComponentFixture<RegInfoGobernanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInfoGobernanzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegInfoGobernanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
