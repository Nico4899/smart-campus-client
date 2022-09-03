import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsTableComponent } from './buildings-table.component';

describe('BuildingsTableComponent', () => {
  let component: BuildingsTableComponent;
  let fixture: ComponentFixture<BuildingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
