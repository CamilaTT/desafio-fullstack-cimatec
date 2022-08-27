import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-acessar',
  templateUrl: './acessar.component.html',
  styleUrls: ['./acessar.component.css']
})
export class AcessarComponent {

  usuario = '';
  senha = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.auth(this.usuario, this.senha).subscribe(() => {
      this.router.navigate(['home']);
      console.log(this.usuario, this.senha)
    }, (error) => {
      alert('usuário ou senha inválido(a)')
      console.log(error)
    })
  }

}
