import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsArchitectureDashboardComponent } from './aws-architecture-dashboard.component';

describe('AwsArchitectureDashboardComponent', () => {
  let component: AwsArchitectureDashboardComponent;
  let fixture: ComponentFixture<AwsArchitectureDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwsArchitectureDashboardComponent]
    });
    fixture = TestBed.createComponent(AwsArchitectureDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
