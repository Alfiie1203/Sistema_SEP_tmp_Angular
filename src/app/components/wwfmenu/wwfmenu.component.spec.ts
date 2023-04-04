import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwfmenuComponent } from './wwfmenu.component';

describe('WwfmenuComponent', () => {
  let component: WwfmenuComponent;
  let fixture: ComponentFixture<WwfmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwfmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwfmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
