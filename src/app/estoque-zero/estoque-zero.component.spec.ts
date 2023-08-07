import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueZeroComponent } from './estoque-zero.component';

describe('EstoqueZeroComponent', () => {
  let component: EstoqueZeroComponent;
  let fixture: ComponentFixture<EstoqueZeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstoqueZeroComponent]
    });
    fixture = TestBed.createComponent(EstoqueZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
