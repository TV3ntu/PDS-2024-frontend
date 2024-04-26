import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityCardComponent } from './entity-card.component';

describe('InstitutionComponent', () => {
  let component: EntityCardComponent;
  let fixture: ComponentFixture<EntityCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityCardComponent]
    });
    fixture = TestBed.createComponent(EntityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
