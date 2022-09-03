import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBuildingsTableComponent } from './favorite-buildings-table.component';

describe('FavoriteBuildingsTableComponent', () => {
  let component: FavoriteBuildingsTableComponent;
  let fixture: ComponentFixture<FavoriteBuildingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteBuildingsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteBuildingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
