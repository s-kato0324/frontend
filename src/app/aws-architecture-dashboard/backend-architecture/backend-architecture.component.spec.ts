import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendArchitectureComponent } from './backend-architecture.component';

describe('BackendArchitectureComponent', () => {
  let component: BackendArchitectureComponent;
  let fixture: ComponentFixture<BackendArchitectureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendArchitectureComponent]
    });
    fixture = TestBed.createComponent(BackendArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
