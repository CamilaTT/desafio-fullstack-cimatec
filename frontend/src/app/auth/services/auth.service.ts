import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { API_URL } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private UserService: UserService) { }

  auth(user: string, password: string): Observable<HttpResponse<any>>{
    return this.httpClient.post(`${API_URL}user/login`, {
      userName: user,
      password: password
  },
  { observe: 'response' }).pipe(
    tap((res) => {
      const authToken = res.headers.get('x-access-token') ?? '';
      this.UserService.saveToken(authToken);
    })
  )
  }
}
