import { TestBed } from '@angular/core/testing';

import { GroceryManagerService } from './grocery-manager.service';

describe('GroceryManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroceryManagerService = TestBed.get(GroceryManagerService);
    expect(service).toBeTruthy();
  });
});
