import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPowerComponent } from './menu-power.component';

describe('MenuPowerComponent', () => {
  let component: MenuPowerComponent;
  let fixture: ComponentFixture<MenuPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
