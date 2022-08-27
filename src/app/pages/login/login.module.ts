import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthModule } from '../../auth/auth.module';
import { MessageModule } from '../../components/message/message.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcessarComponent } from './acessar/acessar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';


@NgModule({
  declarations: [
    LoginComponent,
    AcessarComponent,
    CadastrarComponent
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
