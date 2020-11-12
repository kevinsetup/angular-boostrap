import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoAcademicaComponent } from './tipo-academica/tipo-academica/tipo-academica.component';
import { MenuComponent } from './template/menu/menu.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from './template/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    TipoAcademicaComponent,
    MenuComponent,
    FooterComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
