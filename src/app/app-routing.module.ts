import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { TipoAcademicaComponent } from '../app/tipo-academica/tipo-academica/tipo-academica.component';
import { UnidadAcademicaComponent } from './unidad-academica/unidad-academica/unidad-academica.component';


const routes: Routes = [

    {
      path : 'login', component : LoginComponent
    },
    {
      path : 'tipo',
      component : TipoAcademicaComponent
    },
    {
      path : 'unidad',
      component : UnidadAcademicaComponent
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
