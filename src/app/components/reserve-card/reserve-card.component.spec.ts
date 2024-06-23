import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveCardComponent } from './reserve-card.component';

describe('InstitutionComponent', () => {
  let component: ReserveCardComponent;
  let fixture: ComponentFixture<ReserveCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveCardComponent]
    });
    fixture = TestBed.createComponent(ReserveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
