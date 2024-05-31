import { ComponentFixture, TestBed } from '@angular/core/testing';

import { assignmentPageComponent } from './assignment-page.component';

describe('LoginPageComponent', () => {
  let component: assignmentPageComponent;
  let fixture: ComponentFixture<assignmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [assignmentPageComponent]
    });
    fixture = TestBed.createComponent(assignmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
