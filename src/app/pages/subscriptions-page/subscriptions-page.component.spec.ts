import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsPageComponent } from './subscriptions-page.component';

describe('SubscriptionsPageComponent', () => {
  let component: SubscriptionsPageComponent;
  let fixture: ComponentFixture<SubscriptionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionsPageComponent]
    });
    fixture = TestBed.createComponent(SubscriptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
