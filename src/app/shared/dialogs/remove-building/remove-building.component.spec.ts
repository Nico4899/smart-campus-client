import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBuildingComponent } from './remove-building.component';

describe('RemoveBuildingComponent', () => {
  let component: RemoveBuildingComponent;
  let fixture: ComponentFixture<RemoveBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveBuildingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
