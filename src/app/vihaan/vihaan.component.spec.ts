import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VihaanComponent } from './vihaan.component';

describe('VihaanComponent', () => {
  let component: VihaanComponent;
  let fixture: ComponentFixture<VihaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VihaanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VihaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
