import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { VehiclesDataService } from '../services/vehicles-data.service';

describe('VehiclesDataService', () => {
  let service: VehiclesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        VehiclesDataService
      ]
    });
    service = TestBed.inject(VehiclesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
