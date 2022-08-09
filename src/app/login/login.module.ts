import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthModule } from '../auth/auth.module';
import { MessageModule } from '../components/message/message.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AuthModule,
    MessageModule,
    FormsModule
  ]
})
export class LoginModule { }
