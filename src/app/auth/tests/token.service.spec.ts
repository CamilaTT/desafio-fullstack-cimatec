import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TokenService } from '../services/token.service';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        TokenService 
      ]
    });
    service = TestBed.inject(TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
