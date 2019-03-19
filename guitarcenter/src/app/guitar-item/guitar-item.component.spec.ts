import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarItemComponent } from './guitar-item.component';

describe('GuitarItemComponent', () => {
  let component: GuitarItemComponent;
  let fixture: ComponentFixture<GuitarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
