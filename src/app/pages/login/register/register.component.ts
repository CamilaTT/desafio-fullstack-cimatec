import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/models/user/new-user';
import { UserRegisterService } from './user-register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userRegisterService: UserRegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      terms: [false, Validators.pattern('true')]
    })
  }

  register() {
    event?.preventDefault()

    if(this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      console.log(newUser);
      this.userRegisterService.userRegister(newUser).subscribe(() => {
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
