import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAAKColComponent } from './dashboard-aak-col.component';

describe('DashboardAAKColComponent', () => {
  let component: DashboardAAKColComponent;
  let fixture: ComponentFixture<DashboardAAKColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAAKColComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAAKColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
