import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UserRegisterService } from './user-register.service';

describe('UserRegisterService', () => {
  let service: UserRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
        ReactiveFormsModule
      ],
    });
    service = TestBed.inject(UserRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
