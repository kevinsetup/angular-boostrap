import { Injectable } from '@angular/core';
import { tipo_academica } from '../models/tipo-academica';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable, Subscription, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TipoAcademicaService {
  selectedTipo : tipo_academica;
  tipos : tipo_academica[];
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  private url : string = 'http://localhost:1212/api/'
  constructor(private http: HttpClient) { 
    this.selectedTipo = new tipo_academica();
  }
  getTipo(): Observable<tipo_academica[]>{
    return this.http.get<tipo_academica[]>(this.url+"tipo");
  
   
  }

  addTipo(tipo_academica: tipo_academica){
       return this.http.post(this.url+"tipo", tipo_academica, {headers: this.httpHeaders});
  }
  updateTipo(tipo_academica: tipo_academica){
     return this.http.put(this.url + 'tipo' +`/${tipo_academica.ID_TIPO_UNIDAD}`, tipo_academica, {headers: this.httpHeaders});
  }
  deleteTipo(id : number){
    return this.http.delete(this.url + 'tipo' + `/${id}`);
  }



}
