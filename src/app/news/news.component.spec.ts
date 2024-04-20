import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NEWSComponent } from './news.component';

describe('NEWSComponent', () => {
  let component: NEWSComponent;
  let fixture: ComponentFixture<NEWSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NEWSComponent]
    });
    fixture = TestBed.createComponent(NEWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
