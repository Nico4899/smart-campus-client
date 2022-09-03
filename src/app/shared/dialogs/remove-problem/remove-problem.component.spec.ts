import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProblemComponent } from './remove-problem.component';

describe('RemoveProblemComponent', () => {
  let component: RemoveProblemComponent;
  let fixture: ComponentFixture<RemoveProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveProblemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
