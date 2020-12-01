import { Injectable } from '@angular/core';
import { tipo_academica } from '../models/tipo-academica';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable, Subscription, of, throwError } from 'rxjs';
import { AuthService } from '../../../login/login/services/auth.service';
import Swal from 'sweetalert2';
import {catchError,  map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TipoAcademicaService {
  selectedTipo : tipo_academica;
  tipos : tipo_academica[];
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  private url : string = 'http://localhost:1616/api/'
  constructor(private http: HttpClient, private router:Router,
    private authService: AuthService) { 
    this.selectedTipo = new tipo_academica();
  }
  private addAuthorizationHeader(){
    let token = this.authService.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer '+ token);
    }
    return this.httpHeaders;
  }

  private isNoAutorization(e): boolean{
    if(e.status==401 || e.status==403){
      this.router.navigate(['/login'])
      return true;
    }
    return false;
  }



  getTipo(): Observable<any>{
    return this.http.get(this.url+"tipo", {headers : this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      })
    );
   
    }

  addTipo(tipo_academica: tipo_academica){
       return this.http.post(this.url+"tipo", tipo_academica, {headers:this.addAuthorizationHeader()}).pipe(
        map((response:any) =>response),
        catchError(e =>{
          if(this.isNoAutorization(e)){
          return throwError(e)
          }
          if(e.status == 400){
            return throwError(e);
          }
          console.error(e.error.mensaje);
          Swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
        );
       
  }
  updateTipo(tipo_academica: tipo_academica){
     return this.http.put(this.url + 'tipo' +`/${tipo_academica.ID_TIPO_UNIDAD}`, tipo_academica,{headers:this.addAuthorizationHeader()}).pipe(
      map((response:any) =>response),
      catchError(e =>{
        if(this.isNoAutorization(e)){
        return throwError(e)
        }
        if(e.status == 400){
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })

     )
  }


  deleteTipo(id : number){
    return this.http.delete(this.url + 'tipo' + `/${id}`,{headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        if(this.isNoAutorization(e)){
        return throwError(e)
        }
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
      

    );
  }



}
