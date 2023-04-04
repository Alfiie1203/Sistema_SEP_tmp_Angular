import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAAKMexComponent } from './dashboard-aak-mex.component';

describe('DashboardAAKMexComponent', () => {
  let component: DashboardAAKMexComponent;
  let fixture: ComponentFixture<DashboardAAKMexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAAKMexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAAKMexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
