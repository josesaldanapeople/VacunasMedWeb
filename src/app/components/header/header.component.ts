import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Notificacion } from '../../modelos/notificaciones';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatToolbarModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  selectedLanguage = 'es';
  allowDataProcessing = true;
  listaNotificaciones:Notificacion[]=[{
    titulo: '2a Dosis Neumococo',
    contenido: 'Lorem ipsum dolor sit amet consectetur. Aliquet ullamcorper..',
    fecha: '10/09/2023',
    visto: false
  },{
    titulo: 'UMF 23 CIUDAD GUSTAVO DÍAZ ORDAZ',
    contenido: 'Rechazo del trámite',
    fecha: '10/09/2023',
    visto: true
  },{
    titulo: 'UMF 9 Ruiz',
    contenido: 'Lorem ipsum dolor sit amet consectetur. Aliquet ullamcorper..',
    fecha: '10/09/2023',
    visto: true
  },{
    titulo: 'UMF 9 Ruiz',
    contenido: 'Lorem ipsum dolor sit amet consectetur. Aliquet ullamcorper..',
    fecha: '10/09/2023',
    visto: true
  }]

  constructor( private router: Router){

  }

  isProfileVisible = false;
  isNotificacionesVisible = false;


  toggleProfile() {
    this.isProfileVisible = !this.isProfileVisible;

    if(this.isProfileVisible){
      this.isNotificacionesVisible = false;
    }
  }

  toggleNotificaciones() {
    this.isNotificacionesVisible = !this.isNotificacionesVisible;
    if(this.isNotificacionesVisible){
      this.isProfileVisible = false;
    }
  }


  redirectReport(){
    this.router.navigate(['report']);
  }
}
