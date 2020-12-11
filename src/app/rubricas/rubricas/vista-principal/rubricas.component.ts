import { Component, OnInit, ɵConsole } from '@angular/core';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Rubricas } from 'src/app/rubricas/rubricas/models/rubricas'
import { RubricasService } from 'src/app/rubricas/rubricas/services/rubricas.service';
import { Cursos } from 'src/app/rubricas/rubricas/models/cursos';
import { Docente } from 'src/app/rubricas/rubricas/models/docentes';
import { Proyectos } from 'src/app/rubricas/rubricas/models/proyectos';
import { ThrowStmt } from '@angular/compiler';
import { AnimateTimings } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Semestre } from 'src/app/rubricas/rubricas/models/semestre';

interface Ciclos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-rubricas',
  templateUrl: './rubricas.component.html',
  styleUrls: ['./rubricas.component.css']
})



export class RubricasComponent implements OnInit {
  rubrica: Rubricas[];
  proyectos: Proyectos[];

  cursos: any;
  docente: Docente[];
  semestre: Semestre[];
  ID_EVALUADOR: any;
  visible: boolean[];
  constructor(public Rubrica: RubricasService) { }

  ngOnInit(): void {
    this.getSemestre();
  }

  getSemestre() {
    this.Rubrica.getSemestre().subscribe(
      (data) => {
        this.semestre = data['semestres'];
        this.Rubrica.semestre = data['semestres'] as Semestre[];
      }
    )
  }
  getProyectos(value) {
    let w = 0;
    let arr = [];
    console.log(value);
    this.Rubrica.getProyectos(value).subscribe(
      (data) => {
        // console.log(data['proyectos']);
        // this.proyectos = data['proyectos'];

        console.log(data['proyectos']);
        //var array1 = data['proyectos'];
        //this.proyectos = data['proyectos'];
        this.proyectos = data['proyectos'];




        for (let i in data['proyectos']) {
          console.log(data['proyectos'][i].py_id);



          this.Rubrica.getCurso(data['proyectos'][i].py_id).subscribe(
            (res) => {
              //console.log(res);
               
              //this.proyectos = res['proyecto'].proyecto;
              // console.log(res);
            //  arr.push(res['cursos']);
              //console.log(arr);
            //  this.cursos = arr;
             // console.log(arr);

             // console.log(arr[0]);
              //this.proyectos = arr;
              //this.proyectos = arr;
             // console.log(this.proyectos);


             


            }
           

          )







          this.Rubrica.getCurso(data['proyectos'][i].py_id).subscribe(
            (datas) => {
              //  console.log(datas['cursos'])

              let arr = [];
              /*
              Object.keys(datas['cursos']).map(function(key){
                arr.push({[key]: datas['cursos'][key]});
                return arr;
              })
             // console.log( arr);
*/

              let obj_unidos = Object.assign(datas['cursos'], data['proyectos'][i]);

              //this.cursos = obj_unidos;
              //console.log(this.cursos);


              //  console.log(obj_unidos);
              //console.log(arr);
              // console.log(this.proyectos);
              //  this.cursos = datas['cursos'];

              //console.log( this.cursos);
            }
          )
        }


      }
    )
  }


  visibleIndex = -1;
  getCursos(value) {

    
    this.Rubrica.getCurso(value.py_id).subscribe(
      (data) => {
       
       
        
       
        //  let obj_unidos = Object.assign(value, data);
           
           // console.log(obj_unidos);
            this.cursos = data['cursos'];
        
        



      
        
      }
      

    )
    
  }





}
