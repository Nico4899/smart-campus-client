import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBuildingsComponent } from './filter-buildings.component';

describe('FilterBuildingsComponent', () => {
  let component: FilterBuildingsComponent;
  let fixture: ComponentFixture<FilterBuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBuildingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
