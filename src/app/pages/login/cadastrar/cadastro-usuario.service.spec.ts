import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CadastroUsuarioService } from './cadastro-usuario.service';

describe('CadastroUsuarioService', () => {
  let service: CadastroUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
        ReactiveFormsModule
      ],
    });
    service = TestBed.inject(CadastroUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
