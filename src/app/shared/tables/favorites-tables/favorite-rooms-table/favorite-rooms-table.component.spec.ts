import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteRoomsTableComponent } from './favorite-rooms-table.component';

describe('FavoriteRoomsTableComponent', () => {
  let component: FavoriteRoomsTableComponent;
  let fixture: ComponentFixture<FavoriteRoomsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteRoomsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteRoomsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
