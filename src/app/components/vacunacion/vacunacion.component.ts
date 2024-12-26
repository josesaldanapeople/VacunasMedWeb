import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Paciente } from '../../modelos/pacientes';
import { MatTabsModule } from '@angular/material/tabs';
import { EsquemaBasicoComponent } from "../esquema/esquema-basico/esquema-basico.component";
import { SiguientesComponent } from '../esquema/siguientes/siguientes.component';
import { OtrasComponent } from '../esquema/otras/otras.component';
import { Vacuna } from '../../modelos/vacuna';

@Component({
  selector: 'app-vacunacion',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule, MatIcon, FormsModule, CommonModule, MatTabsModule,
    EsquemaBasicoComponent,
    OtrasComponent,
    SiguientesComponent
],
  templateUrl: './vacunacion.component.html',
  styleUrl: './vacunacion.component.scss'
})
export class VacunacionComponent {
  @ViewChild(EsquemaBasicoComponent) esquemaBasicoComponent!: EsquemaBasicoComponent;
idcentro:number=-1
  indexSeleccionado = 0;
curp:string=''
nuevaBusqueda:boolean=false
paciente:Paciente={
  nombre: 'José Trejo Péres de las Casas ',
  curp: 'TEPJ780815HMCRRS05',
  fechanacimiento: '15/08/1978',
  genero: 'Masculino',
  estado: 'México',
  edad: 18
}

buscarCurp()
{
  this.nuevaBusqueda=true
}
nuevaConsulta()
{
  this.nuevaBusqueda=false;
  this.curp='';
}
changeIndex(index: number){
  this.indexSeleccionado = index;
}
asignarCentro(id:number){
  this.idcentro= id;
}
getVacuna(vacuna:Vacuna)
{

  this.esquemaBasicoComponent.actualizarVacunas(vacuna)
}



}
