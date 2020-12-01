import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable, Subscription, of, throwError } from 'rxjs';
import { unidad_academica } from '../models/unidad-academica';
import { campus } from '../models/campus';
import {facultad} from '../models/facultad';
import Swal from 'sweetalert2';
import {catchError,  map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../../login/login/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class UnidadAcademicaService {
  selectedAcad : unidad_academica;
  selectedCamp: campus;
  selectedFac : facultad;
  academica : unidad_academica[];
  campus : campus[];
  facultad : facultad[];

  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  private url : string = 'http://localhost:1616/api/'
  constructor(private http: HttpClient, private router:Router,
    private authService: AuthService) { 
    this.selectedAcad = new unidad_academica();
    this.selectedCamp = new campus();
    this.selectedFac = new facultad();
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










  getAcad(): Observable<any>{
    return this.http.get(this.url+"unidad" , {headers : this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      })
    );
  
   
  }
  getCampus(): Observable<any>{
    return this.http.get(this.url+"unidad/campus", {headers : this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      })
    );
  
   
  }
  getCampusFacultad(nom : String){
    return this.http.get<facultad[]>(this.url+"unidad/campus/"+nom,{headers:this.addAuthorizationHeader()}).pipe(
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
  postAcademica(unidad_acad : unidad_academica){
    return this.http.post(this.url+"unidad", unidad_acad , {headers:this.addAuthorizationHeader()}).pipe(
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
  putAcademica(unidad_acad : unidad_academica){
    return this.http.put(this.url + 'unidad' +`/${unidad_acad.ID_UNIDAD}`, unidad_acad,{headers:this.addAuthorizationHeader()}).pipe(
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
  deleteAcademica(id : number){
    return this.http.delete(this.url + "unidad"  + `/${id}`, {headers:this.addAuthorizationHeader()}).pipe(
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
