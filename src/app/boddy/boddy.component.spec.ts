import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoddyComponent } from './boddy.component';

describe('BoddyComponent', () => {
  let component: BoddyComponent;
  let fixture: ComponentFixture<BoddyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoddyComponent]
    });
    fixture = TestBed.createComponent(BoddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
