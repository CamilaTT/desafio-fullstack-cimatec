import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent {

  user = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.auth(this.user, this.password).subscribe(() => {
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
