import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthModule } from '../../auth/auth.module';
import { MessageModule } from '../../components/message/message.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccessComponent } from './access/access.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    AccessComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AuthModule,
    MessageModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
