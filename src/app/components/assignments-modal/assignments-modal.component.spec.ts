import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsModalComponent } from './assignments-modal.component';

describe('AssigmentsModalComponent', () => {
  let component: AssignmentsModalComponent;
  let fixture: ComponentFixture<AssignmentsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentsModalComponent]
    });
    fixture = TestBed.createComponent(AssignmentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
