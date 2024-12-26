import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { Vacuna } from '../../../modelos/vacuna';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esquema-basico',
  standalone: true,
  imports: [MatIcon,MatCard,MatCardContent,CommonModule,MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './esquema-basico.component.html',
  styleUrl: './esquema-basico.component.scss'
})
export class EsquemaBasicoComponent {
  vacunas_aplicadas:Vacuna[]=[{
    nombre: 'Influenza',
    aplicada: false,
    causa_perdida: 'Perdidad por edad',
    fecha: '',
    dosis: [],
    descripcion: 'Anual 2024',
    hora: ''
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
  constructor(private cdr: ChangeDetectorRef){}
  generateUniqueNumber(outerIndex: number, innerIndex: number): number {
    // Genera un número único combinando los índices de ambos ngFor
    return outerIndex * 1000 + innerIndex;
  }

  setStep(index: number) {
 
    this.step.set(index);
  }
  actualizarVacunas(nuevaVacuna:Vacuna)
  {

    console.log('vacuna3',nuevaVacuna)

    const index = this.vacunas_aplicadas.findIndex(v => v.nombre === nuevaVacuna.nombre);
    if (index !=-1) {
      this.vacunas_aplicadas[index].dosis.push(nuevaVacuna.dosis[0])
     
    }
    else{
      this.vacunas_aplicadas.push(nuevaVacuna)
    }
    this.cdr.detectChanges(); 
  }

}
