import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NovoUsuario } from 'src/app/models/usuario/novo-usuario';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroUsuarioService: CadastroUsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      terms: [false, Validators.pattern('true')]
    })
  }

  register() {
    event?.preventDefault()

    if(this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      console.log(novoUsuario);
      this.cadastroUsuarioService.userRegister(novoUsuario).subscribe(() => {
        this.router.navigate(['']);
      },
        (error) => {
            Swal.fire(
              {
                text: 'Não foi possível realizar o cadastro. Tente usar outro nome de usuário!',
                confirmButtonColor: '#00274E'
              }
            )
        }
      )
    }
  }
}
