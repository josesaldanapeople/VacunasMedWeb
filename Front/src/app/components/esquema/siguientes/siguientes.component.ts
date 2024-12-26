import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { Vacuna } from '../../../modelos/vacuna';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalNuevaVacunaComponent } from '../modal-nueva-vacuna/modal-nueva-vacuna.component';

@Component({
  selector: 'app-siguientes-vacunas',
  standalone: true,
  imports: [MatIcon,MatCard,MatCardContent,CommonModule,MatExpansionModule,MatDialogModule],
  templateUrl: './siguientes.component.html',
  styleUrl: './siguientes.component.scss'
})
export class SiguientesComponent {
  @Output() dataEmitter = new EventEmitter<Vacuna>();
  vacunas_siguientes:Vacuna[]=[
    {
      nombre: 'TD/TDPA',
      aplicada: true,
      causa_perdida: '',
      fecha: '12/nov/2024',
      dosis: [{
        id: 0,
        numDosis: 'Primera dosis',
        administracion: 'intramuscular',
        fecha_caducidad: '12/11/2024',
        dosis_admin: '1.5mg',
        fabricante: 'Biofarma',
        lote: 'ABC-0000001',
        siguiente: ' 2 semanas'
      }],
      descripcion: 'Tétanos,Difteria, Tosferina | Cada 10 años',
      hora: '10:20 am'
    },
    {
      nombre: 'Antihepatitis B',
      aplicada: true,
      causa_perdida: '',
      fecha: '12/nov/2024',
      dosis: [{
        id: 1,
        numDosis: 'Primera dosis',
        administracion: 'intramuscular',
        fecha_caducidad: '12/11/2024',
        dosis_admin: '1.5mg',
        fabricante: 'Biofarma',
        lote: 'ABC-0000001',
        siguiente: ' 2 semanas'
      },{
        id: 2,
        numDosis: 'Segunda dosis',
        administracion: 'intramuscular',
        fecha_caducidad: '12/11/2024',
        dosis_admin: '1.5mg',
        fabricante: 'Biofarma',
        lote: 'ABC-0000002',
        siguiente: ' 2 semanas'
      }],
      descripcion: 'Mayores de 65 años o en riesgo',
      hora: '10:20 am'
    },
    ]
    step = signal(-1);
    outerArray = [/* tus datos para el ngFor externo */];
    innerArray = [/* tus datos para el ngFor interno */];
    vacuna_vacia:Vacuna={
      nombre: '',
      descripcion: '',
      aplicada: false,
      causa_perdida: '',
      fecha: '',
      hora: '',
      dosis: []
    }
    constructor(public dialog: MatDialog) {}
  
    generateUniqueNumber(outerIndex: number, innerIndex: number): number {
      // Genera un número único combinando los índices de ambos ngFor
      return outerIndex * 1000 + innerIndex;
    }
  
    setStep(index: number) {
   
      this.step.set(index);
    }
    
  openModal(vacuna:Vacuna=this.vacuna_vacia): void {
    const dialogRef = this.dialog.open(ModalNuevaVacunaComponent, {
      width: '650px', // Ajusta el tamaño del modal
      data:  vacuna , // Datos opcionales que puedes pasar al modal
    });

    // Opcional: manejar la acción al cerrar el modal
    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal fue cerrado');
       this.dataEmitter.emit(result.vacuna);
      
    });
  }
  

}
