import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteComponentsTableComponent } from './favorite-components-table.component';

describe('FavoriteComponentesTableComponent', () => {
  let component: FavoriteComponentsTableComponent;
  let fixture: ComponentFixture<FavoriteComponentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteComponentsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteComponentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
