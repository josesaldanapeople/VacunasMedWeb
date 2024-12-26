import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EsquemaVacunacionComponent } from '../esquema-vacunacion/esquema-vacunacion.component';
import { HeaderComponent } from '../header/header.component';
import { VacunaComponent } from '../vacuna/vacuna.component';
import { SiguientesComponent } from "../esquema-vacunacion/siguientes/siguientes.component";
import { OtrasComponent } from "../esquema-vacunacion/otras/otras.component";
import { VacunacionComponent } from "../vacunacion/vacunacion.component";
import { UnidadesComponent } from "../unidades/unidades.component";

@Component({
  selector: 'app-home',
  standalone: true,
   imports: [CommonModule, MatIconModule, MatToolbarModule, MatTabsModule, VacunaComponent, EsquemaVacunacionComponent, HeaderComponent, SiguientesComponent, OtrasComponent, VacunacionComponent, UnidadesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild(VacunacionComponent) vacunacionComponent!: VacunacionComponent;
  indexSeleccionado = 0;
  idCentro=-1
  

  changeIndex(index: number){
    this.indexSeleccionado = index;
  }


  links = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];
  activeLink = this.links[0].path;

  setActiveLink(path: string): void {
    this.activeLink = path;
  }
  seleccionCentro(idCentro:number)
  {
    this.idCentro=idCentro
    this.vacunacionComponent.asignarCentro(idCentro);
  }
}
