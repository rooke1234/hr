import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service.ts.service';

describe('Data.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService); //Data.Service.TsService = TestBed.get(Data.Service.TsService);
    expect(service).toBeTruthy();
  });
});
