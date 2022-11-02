import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsTableComponent } from './components-table.component';

describe('ComponentsTableComponent', () => {
  let component: ComponentsTableComponent;
  let fixture: ComponentFixture<ComponentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
