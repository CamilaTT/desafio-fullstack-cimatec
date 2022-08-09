import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { API_URL } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private UsuarioService: UsuarioService) { }

  auth(usuario:string, senha:string):Observable<HttpResponse<any>>{
    return this.httpClient.post(`${API_URL}user/login`, {
      userName: usuario,
      password: senha
  },
  { observe: 'response' }).pipe(
    tap((res) => {
      const authToken = res.headers.get('x-access-token') ?? '';
      this.UsuarioService.salvaToken(authToken);
    })
  )
  }
}
