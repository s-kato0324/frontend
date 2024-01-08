import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelFeatureComponent } from './ng-model-feature.component';

describe('NgModelFeatureComponent', () => {
  let component: NgModelFeatureComponent;
  let fixture: ComponentFixture<NgModelFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgModelFeatureComponent]
    });
    fixture = TestBed.createComponent(NgModelFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
