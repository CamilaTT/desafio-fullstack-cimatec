import { TestBed } from '@angular/core/testing';

import { SelectService } from '../services/select.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SelectService', () => {
  let service: SelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        SelectService
      ]
    });
    service = TestBed.inject(SelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
