import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from 'src/app/models/usuario/novo-usuario';
import { API_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private httpClient: HttpClient) { }

  userRegister(novoUsuario: NovoUsuario) {
    return this.httpClient.post(`${API_URL}user/signup`, novoUsuario);
  }
}
