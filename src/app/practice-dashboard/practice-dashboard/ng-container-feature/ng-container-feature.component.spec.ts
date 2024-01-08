import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerFeatureComponent } from './ng-container-feature.component';

describe('NgContainerFeatureComponent', () => {
  let component: NgContainerFeatureComponent;
  let fixture: ComponentFixture<NgContainerFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgContainerFeatureComponent]
    });
    fixture = TestBed.createComponent(NgContainerFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
