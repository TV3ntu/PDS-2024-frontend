import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailComponent } from './entity-detail.component';

describe('EntityDetailComponent', () => {
  let component: EntityDetailComponent;
  let fixture: ComponentFixture<EntityDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityDetailComponent]
    });
    fixture = TestBed.createComponent(EntityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
