import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolBindingComponent } from './interpol-binding.component';

describe('InterpolBindingComponent', () => {
  let component: InterpolBindingComponent;
  let fixture: ComponentFixture<InterpolBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
