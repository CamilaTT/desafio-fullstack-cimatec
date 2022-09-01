import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';


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
    }, (error) => {
          Swal.fire(
            {
              text: 'Nome de usuário e/ou senha não confere(m). Por favor, verifique e tente novamente.',
              confirmButtonColor: '#00274E'
            }
          )
      })
  }
}
