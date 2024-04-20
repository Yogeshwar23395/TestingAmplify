import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSolutionsComponent } from './technical-solutions.component';

describe('TechnicalSolutionsComponent', () => {
  let component: TechnicalSolutionsComponent;
  let fixture: ComponentFixture<TechnicalSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalSolutionsComponent]
    });
    fixture = TestBed.createComponent(TechnicalSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
