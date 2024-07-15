import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDayCardComponent } from './assignment-day-card.component';

describe('AssignmentDayCardComponent', () => {
  let component: AssignmentDayCardComponent;
  let fixture: ComponentFixture<AssignmentDayCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentDayCardComponent]
    });
    fixture = TestBed.createComponent(AssignmentDayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
