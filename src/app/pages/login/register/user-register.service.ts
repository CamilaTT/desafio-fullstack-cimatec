import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from 'src/app/models/user/new-user';
import { API_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private httpClient: HttpClient) { }

  userRegister(newUser: NewUser) {
    return this.httpClient.post(`${API_URL}user/signup`, newUser);
  }
}
