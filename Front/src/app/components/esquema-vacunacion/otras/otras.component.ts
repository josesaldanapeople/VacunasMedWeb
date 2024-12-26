import { Component } from '@angular/core';
import { ModalEfectosSecundariosComponent } from '../modal-efectos-secundarios/modal-efectos-secundarios.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-otras',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatGridListModule],
  templateUrl: './otras.component.html',
  styleUrl: './otras.component.scss'
})
export class OtrasComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open(ModalEfectosSecundariosComponent, {
      width: '800px'
    });
  }
  vaccines = [
    {
      name: 'COVID 19',
      description: 'Mayores de 65 años o en riesgo',
      status: 'Aplicada',
      color: 'verde',
      nextDate: 'Aplicada',
      nextDate2: '12/nov/2024',
      vacunas: [{
        dosis: 'Primera dosis',
        mostrar: false
      }, {
        dosis: 'Segunda dosis',
        mostrar: true
      }]
    }
  ];
  vaccines2 = [
    {
      name: 'Fiebre Tifoides',
      description: 'Única dosis',
      status: 'Aplicada',
      statusColor: '#d32f2f',
      color: 'verde',
      nextDate: 'Aplicada',
      nextDate2: '12/nov/2024'
    },
    {
      name: 'Triple viral - SRP',
      description: '2a dosis',
      status: 'Aplicada',
      statusColor: '#d32f2f',
      color: 'verde',
     nextDate: 'Aplicada',
      nextDate2: '12/nov/2024'
    }
  ];

  mostrarVacuna(vacuna:any){
    vacuna.mostrar = !vacuna.mostrar;
  }
}
