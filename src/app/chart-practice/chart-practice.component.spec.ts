import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPracticeComponent } from './chart-practice.component';

describe('ChartPracticeComponent', () => {
  let component: ChartPracticeComponent;
  let fixture: ComponentFixture<ChartPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartPracticeComponent]
    });
    fixture = TestBed.createComponent(ChartPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
