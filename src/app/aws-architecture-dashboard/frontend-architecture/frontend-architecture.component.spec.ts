import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendArchitectureComponent } from './frontend-architecture.component';

describe('FrontendArchitectureComponent', () => {
  let component: FrontendArchitectureComponent;
  let fixture: ComponentFixture<FrontendArchitectureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontendArchitectureComponent]
    });
    fixture = TestBed.createComponent(FrontendArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
