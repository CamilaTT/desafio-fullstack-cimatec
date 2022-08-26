import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private AuthService:AuthService, private router:Router) { }

  ngOnInit(): void { }

  login() {
    this.AuthService.auth(this.usuario, this.senha).subscribe(() => {
      this.router.navigate(['home']);
      console.log(this.usuario, this.senha)
    }, (error) => {
      alert('usuário ou senha inválido(a)')
      console.log(error)
    })
  }
}
