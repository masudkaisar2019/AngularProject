import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbsComponent } from './bulbs.component';

describe('BulbsComponent', () => {
  let component: BulbsComponent;
  let fixture: ComponentFixture<BulbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
