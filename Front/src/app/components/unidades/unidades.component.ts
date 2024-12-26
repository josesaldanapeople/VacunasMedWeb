import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Unidad } from '../../modelos/Unidad';
import { MatIcon } from '@angular/material/icon';
import { Centro } from '../../modelos/Centro';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalcentrosComponent } from '../modalcentros/modalcentros.component';

@Component({
  selector: 'app-unidades',
  standalone: true,
  imports: [MatCard,MatCardTitle,MatCardSubtitle,MatToolbarModule, MatTabsModule,CommonModule,MatIcon, MatDialogModule,],
  templateUrl: './unidades.component.html',
  styleUrl: './unidades.component.scss'
})
export class UnidadesComponent {
  @Output() dataEmitter = new EventEmitter<number>();
  indexSeleccionado = -1;
  unidades:Unidad[]=[{
    nombre: 'Unidad de Medicina Familiar No.26 - IMSS',
    alias: 'UMF 26',
    numero_exterior: '159',
    numero_interior: 'Tlaxcala 159, Hipódromo,06100,Ciudad de México,CDMX',
    consultorio: '120',
    horario: '08:00-14:00 hrs',
    puesto: 'Personal de enfermeria',
    direccion: 'Av. Reforma 4.San francisco Tetecala, Azcapotzalco,02730, Ciudad de México, CDMX',
    id: 1
  },{
    nombre: 'Centro de Salud',
    alias: 'Centro de Salud',
    numero_exterior: '159',
    numero_interior: 'Tlaxcala 159, Hipódromo,06100,Ciudad de México,CDMX',
    consultorio: '120',
    horario: '08:00-14:00 hrs',
    puesto: 'Personal de enfermeria',
    direccion: '',
    id: 2
  },{
    nombre: 'Unidad de Medicina Familiar No.26 - IMSS',
    alias: 'UMF 13',
    numero_exterior: '159',
    numero_interior: 'Tlaxcala 159, Hipódromo,06100,Ciudad de México,CDMX',
    consultorio: '120',
    horario: '08:00-14:00 hrs',
    puesto: 'Personal de enfermeria',
    direccion: '',
    id: 3
  }]
  centros:Centro[]=[{nombre:'Clínica 10 UMF IMSS',
    direccion:'Calzada de Tlalpan, Niños Héroes de Chápultepec,Niños Héroes, Ciudad de México, CDMX, México'},
    {nombre:'Clínica de ISSSTE',
      direccion:'Dr Alberto Pisanty O.Doctora Tacubaya,Ciudad de México, CDMX, México'},
      {nombre:'Clínica Familiar IMSS 26',
        direccion:'Tlaxcala Hipódromo Ciudad de México, CDMX, México'}

  ]
  public unidadSeleccionada:Unidad= new Unidad();
  constructor(public dialog: MatDialog) {}

  changeIndex(index: number){
    this.indexSeleccionado = index;
    console.log('indice',this.indexSeleccionado)
    const unidadencontrada=this.unidades.find(item => item.id ===index);

    if(unidadencontrada){
      this.unidadSeleccionada = unidadencontrada;
      this.dataEmitter.emit(this.indexSeleccionado);     
    }
     
  }
  agregar(unidad:Unidad)
  {
    let unidadnew:Unidad={
      id: 5,
      nombre: 'Unidad de Medicina Familiar No.32 - IMSS',
      alias: 'UMF 32',
      numero_exterior: '159',
      numero_interior: 'Tlaxcala 159, Hipódromo,06100,Ciudad de México,CDMX',
      consultorio: '120',
      horario: '08:00-14:00 hrs',
      puesto: 'Personal de enfermeria',
      direccion: '',
    }
    this.unidades.push(unidad);
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalcentrosComponent, {
      width: '500px', // Ajusta el tamaño del modal
      data: { message: 'Hola desde el modal' }, // Datos opcionales que puedes pasar al modal
    });

    // Opcional: manejar la acción al cerrar el modal
    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal fue cerrado');
      let unidad:Unidad=result.unidad

      console.log('Resultado:', unidad);
      if(unidad!=undefined)
      {
        this.agregar(unidad)
      }
      
    });
  }
}
