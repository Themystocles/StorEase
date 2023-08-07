import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueMinimoComponent } from './estoque-minimo.component';

describe('EstoqueMinimoComponent', () => {
  let component: EstoqueMinimoComponent;
  let fixture: ComponentFixture<EstoqueMinimoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstoqueMinimoComponent]
    });
    fixture = TestBed.createComponent(EstoqueMinimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
