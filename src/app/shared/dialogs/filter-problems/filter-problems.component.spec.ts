import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProblemsComponent } from './filter-problems.component';

describe('FilterProblemsComponent', () => {
  let component: FilterProblemsComponent;
  let fixture: ComponentFixture<FilterProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProblemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
