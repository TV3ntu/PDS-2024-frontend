import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStatsPageComponent } from './course-stats-page.component';

describe('CourseStatsPageComponent', () => {
  let component: CourseStatsPageComponent;
  let fixture: ComponentFixture<CourseStatsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseStatsPageComponent]
    });
    fixture = TestBed.createComponent(CourseStatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
