import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Centro } from '../../modelos/Centro';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatList, MatListItem } from '@angular/material/list';
import { MatCard } from '@angular/material/card';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIcon } from '@angular/material/icon';
import { Unidad } from '../../modelos/Unidad';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modalcentros',
  standalone: true,
  imports: [MatDialogModule,
    MatButtonModule,MatFormFieldModule,
    MatInputModule,CommonModule,
    FormsModule,MatList,MatListItem,MatCard,MatIcon],
  templateUrl: './modalcentros.component.html',
  styleUrl: './modalcentros.component.scss'
})
export class ModalcentrosComponent {
  centros:Centro[]=[{nombre:'Clínica 10 UMF IMSS',
    direccion:'Calzada de Tlalpan, Niños Héroes de Chápultepec,Niños Héroes, Ciudad de México, CDMX, México'},
    {nombre:'Clínica de ISSSTE',
      direccion:'Dr Alberto Pisanty O.Doctora Tacubaya,Ciudad de México, CDMX, México'},
      {nombre:'Clínica Familiar IMSS 26',
        direccion:'Tlaxcala Hipódromo Ciudad de México, CDMX, México'}

  ]
  direccion:string=''
  filteredCentros:Centro[]=[]
  verMapa:boolean=false;
  fuenteMapa:any;
  unidad:Unidad={
    id: 0,
    nombre: '',
    alias: '',
    numero_exterior: '',
    numero_interior: '',
    direccion: '',
    consultorio: '',
    horario: '',
    puesto: ''
  }
  nombre:string=''
  constructor(private sanitizer: DomSanitizer,private dialogRef: MatDialogRef<ModalcentrosComponent>)
  {}

/*   filterVacunas() {
    debugger
    const query = this.direccion.toLowerCase();
    
    this.filteredCentros = this.centros.filter(item => item.direccion.toLowerCase().includes(query));
    
  } */
    filterVacunas() {
      
      const query = this.direccion ? this.direccion.trim().toLowerCase() : '';
    
      if (!query) {
        this.filteredCentros = [];
        return;
      }
    
      this.filteredCentros = this.centros.filter(item => 
        item.direccion && item.direccion.toLowerCase().includes(query)
      );

      if(this.filteredCentros.length==0){
        this.filteredCentros = this.centros.filter(item => 
          item.nombre && item.nombre.toLowerCase().includes(query)
        );
      }
    }
  seleccionCentro(nombre:string){
    const query = nombre.toLowerCase();
    
    const cent = this.centros.filter(item => item.nombre.toLowerCase().includes(query));
    this.direccion=cent[0].direccion
    this.buscaMapa(cent[0].nombre)
    this.verMapa=true;
    this.nombre=cent[0].nombre


    
  }
  buscaMapa(nombre:string){


    switch(nombre){
      case 'Clínica 10 UMF IMSS':
        this.fuenteMapa=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.6028026256745!2d-99.14215022403464!3d19.386343881883157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fef8a85cd5ed%3A0x9882cfac946085f4!2sClinica%2010%20IMSS!5e0!3m2!1ses-419!2smx!4v1734641004957!5m2!1ses-419!2smx')
        break;
      case 'Clínica de ISSSTE':
          this.fuenteMapa=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.238120647744!2d-99.18824812403439!3d19.402114881870816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff6142936bd9%3A0x9153fb8e2fe17153!2sCl%C3%ADnica%20de%20ISSSTE%20Dr.%20Alberto%20Pisanty%20O.!5e0!3m2!1ses-419!2smx!4v1734650617665!5m2!1ses-419!2smx')
          break;
      case 'Clínica Familiar IMSS 26':
        this.fuenteMapa=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.124534922441!2d-99.17152772403426!3d19.407024481866923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff6abdd3ff85%3A0xfac12bc73926056e!2sClinica%20Familiar%20IMSS%2026!5e0!3m2!1ses-419!2smx!4v1734650851155!5m2!1ses-419!2smx')
      break;       
    }

  }
  clearSearch() {
    this.direccion = '';
  }
  clearAlias()
  {
   
    this.unidad.alias=''
  }
  clearExterior()
  {
   
    this.unidad.numero_exterior=''
  }
  clearInterior()
  {
   
    this.unidad.numero_interior=''
  }
  clearConsultorio()
  {
   
    this.unidad.consultorio=''
  }

  registrar(formulario: NgForm)
  {
    this.unidad.direccion=this.direccion
    this.unidad.nombre= this.nombre;

    console.log(this.unidad)
    this.dialogRef.close({ unidad: this.unidad });
  }

}
