import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../auth/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user$ = this.UsuarioService.retornaUsuario();

  constructor(private UsuarioService: UsuarioService, private router:Router) { }

  logout() {
    this.UsuarioService.logout();
    this.router.navigate(['']);
  }
}
