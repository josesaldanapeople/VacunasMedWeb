import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { Vacuna } from '../../../modelos/vacuna';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-otras-vacunas',
  standalone: true,
  imports: [MatIcon,MatCard,MatCardContent,CommonModule,MatExpansionModule],
  templateUrl: './otras.component.html',
  styleUrl: './otras.component.scss'
})
export class OtrasComponent {
  vacunas_otras:Vacuna[]=[
    {
      nombre: 'Vacuna contra Fiebre Amarilla',
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
      descripcion: 'Anual',
      hora: '10:20 am'
    },
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
    
    ]
    step = signal(-1);
    outerArray = [/* tus datos para el ngFor externo */];
    innerArray = [/* tus datos para el ngFor interno */];
  
    generateUniqueNumber(outerIndex: number, innerIndex: number): number {
      // Genera un número único combinando los índices de ambos ngFor
      return outerIndex * 1000 + innerIndex;
    }
  
    setStep(index: number) {
   
      this.step.set(index);
    }
  
}
