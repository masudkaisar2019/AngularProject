import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGroceryContainerComponent } from './main-grocery-container.component';

describe('MainGroceryContainerComponent', () => {
  let component: MainGroceryContainerComponent;
  let fixture: ComponentFixture<MainGroceryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGroceryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGroceryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
