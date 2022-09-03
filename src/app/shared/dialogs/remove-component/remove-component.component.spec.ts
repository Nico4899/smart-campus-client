import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveComponentComponent } from './remove-component.component';

describe('RemoveComponentComponent', () => {
  let component: RemoveComponentComponent;
  let fixture: ComponentFixture<RemoveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
