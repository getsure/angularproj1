import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDirsComponent } from './attr-dirs.component';

describe('AttrDirsComponent', () => {
  let component: AttrDirsComponent;
  let fixture: ComponentFixture<AttrDirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrDirsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttrDirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
