import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoAcademicaComponent } from './tipo-academica/tipo-academica/tipo-academica.component';
import { MenuComponent } from './template/menu/menu.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from './template/footer/footer.component';
import { UnidadAcademicaComponent } from './unidad-academica/unidad-academica/unidad-academica.component';
import { LoginComponent } from './login/login/login.component';
import { AuthService } from './login/login/services/auth.service';
import {RolService } from './login/login/services/rol.service'
@NgModule({
  declarations: [
    AppComponent,
    TipoAcademicaComponent,
    MenuComponent,
    FooterComponent,
    UnidadAcademicaComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RolService ,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
