import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessarComponent } from './acessar/acessar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: AcessarComponent
      },
      {
        path: 'cadastrar',
        component: CadastrarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
