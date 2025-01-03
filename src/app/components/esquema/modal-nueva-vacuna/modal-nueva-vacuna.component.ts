import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { TipoVacuna, Vacuna } from '../../../modelos/vacuna';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatList, MatListItem } from '@angular/material/list';
import { MatCard } from '@angular/material/card';
import { Fabricante } from '../../../modelos/Fabricante';

@Component({
  selector: 'app-modal-nueva-vacuna',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule,
    MatInputModule,CommonModule,
    FormsModule,MatList,MatListItem,MatCard,MatIcon,MatDialogContent,MatDialogActions],
  templateUrl: './modal-nueva-vacuna.component.html',
  styleUrl: './modal-nueva-vacuna.component.scss'
})
export class ModalNuevaVacunaComponent {
  nueva_vacuna:Vacuna={
    nombre: '',
    descripcion: '',
    aplicada: false,
    causa_perdida: '',
    fecha: '',
    hora: '',
    dosis: []
  }
  nombre:string='';
  administracion='';
  dosis:string='';
  aplicacion:string='';
  fabricante:string='';
  lote:string='';
  caducidad:string='';
  siguiente:string='';
  verBuscadorFabricante:boolean=false;
  searchFabricante:string=''
  verBuscadorVacunas:boolean=false;
  seleccionado:boolean=false
  searchVacuna:string=''
  tipovacuna:TipoVacuna[]=[{
    nombre: 'ANTIHEPATITIS B'
  },
  {
    nombre: 'CONTRA TD'
  },{
    nombre: 'INFLUENZA ESTACIONAL'
  },{
    nombre: 'FIEBRE AMARILLA'
  }]
  tipovacunaFiltered:TipoVacuna[]=[]
  fabricantes:Fabricante[]=[{
    nombre: 'Biofarma'
  },{nombre: 'Aztra-Zeneca'},{nombre: 'Novartis'},{nombre: 'Pfizer'}]
  filteredFabricantes:Fabricante[]=[]

  vacunasSugeridas:Vacuna[]=[{
    nombre: 'VACUNA CONTRA TD',
    descripcion: '',
    aplicada: false,
    causa_perdida: '',
    fecha: '',
    hora: '',
    dosis: [{
      id: 0,
      numDosis: '2a Dosis',
      administracion: 'Intramuscular',
      fecha_caducidad: '01/12/2027',
      dosis_admin: '1.5 mg',
      fabricante: 'Biofarma',
      lote: 'ABC-0000001',
      siguiente: ''
    }]
  },
  {
    nombre: 'VACUNA TDAP',
    descripcion: '',
    aplicada: false,
    causa_perdida: '',
    fecha: '',
    hora: '',
    dosis: [{
      id: 0,
      numDosis: '1a Dosis',
      administracion: 'Intramuscular',
      fecha_caducidad: '01/12/2027',
      dosis_admin: '12 gotas',
      fabricante: 'Biofarma',
      lote: 'ABC-0002145',
      siguiente: ''
    }]
  }]

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<ModalNuevaVacunaComponent>) {
    console.log(this.data)
   
    if(this.data.opc ==1)
    {
      this.nombre=this.data.sigVac.nombre
      this.administracion= this.data.sigVac.dosis[0].administracion
      this.dosis =this.data.sigVac.dosis[0].dosis_admin
      
      this.aplicacion=this.formatoaplicacion(this.data.sigVac.dosis.length+1)

    }
   }
   formatoaplicacion(num_dosis:number)
   {
    let dosis:string=''
    switch(num_dosis){
      case 2:dosis='Segunda dosis';
      break;
      case 3:dosis='Tercera dosis';
      break;
      case 4:dosis='Cuarta dosis';
      break;
      case 5:dosis='Quinta dosis';
      break;

    }
    return dosis;
   }
   buscarVacuna(){
    this.verBuscadorVacunas=true;
   }
   cerrarModal(){
    this.dialogRef.close({vacuna:this.nueva_vacuna});
   }
   registrar(formulario: NgForm)
   {
    this.nueva_vacuna.nombre=this.nombre;
    this.nueva_vacuna.fecha= this.obtenerFechaActual()
    this.nueva_vacuna.hora= this.obtenerHoraAMPM()
    this.nueva_vacuna.aplicada=true
    this.nueva_vacuna.dosis=[{
      id: 0,
      numDosis: this.aplicacion,
      administracion: this.administracion,
      fecha_caducidad: this.caducidad,
      dosis_admin: this.dosis,
      fabricante: this.fabricante,
      lote: this.lote,
      siguiente: this.siguiente
    }]
     this.cerrarModal()
   }
   obtenerFechaActual(): string {
    const fecha = new Date();
    const opciones: Intl.DateTimeFormatOptions = {
      day: '2-digit', 
      month: 'short', 
      year: 'numeric'
    };
    
    // Convertir la fecha a formato '12/nov/2024'
    return fecha.toLocaleDateString('es-ES', opciones).replace(/ /g, '/');
  }
  obtenerHoraAMPM(): string {
    const fecha = new Date();
    let horas = fecha.getHours();
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    const ampm = horas >= 12 ? 'PM' : 'AM';
    
    horas = horas % 12;  // Convierte a formato de 12 horas
    horas = horas ? horas : 12;  // Si es 0 (medianoche), lo convierte a 12
    
    return `${horas}:${minutos} ${ampm}`;
  }

  buscarFabricante()
  {
    this.verBuscadorFabricante=true;
  }

  filterFabricante()
  {
    const query = this.searchFabricante ? this.searchFabricante.trim().toLowerCase() : '';
    
    if (!query) {
      this.filteredFabricantes = [];
      return;
    }
  
    this.filteredFabricantes = this.fabricantes.filter(item => 
      item.nombre && item.nombre.toLowerCase().includes(query)
    );

 
  }
  filterVacuna()
  {
    const query = this.searchVacuna ? this.searchVacuna.trim().toLowerCase() : '';
    
    if (!query) {
      this.tipovacunaFiltered = [];
      return;
    }
  
    this.tipovacunaFiltered = this.tipovacuna.filter(item => 
      item.nombre && item.nombre.toLowerCase().includes(query)
    );


 
  }
  seleccionFabricante(fabricante:string)
  {
    this.verBuscadorFabricante=false;
    this.fabricante=fabricante;
  }
  seleccionTipo(nombre:string)
  {
    this.seleccionado=true;

  }
  limpiar(){
    if(this.data.opc==2){
      this.nombre=''
      this.administracion= ''
      this.dosis =''
    }
    this.fabricante=''
    this.lote=''
    this.siguiente=''
  }
  seleccionarVacuna(item:Vacuna){
    this.nombre=item.nombre;
    this.verBuscadorVacunas=false;
    this.administracion= item.dosis[0].administracion
    this.dosis = item.dosis[0].dosis_admin
    this.fabricante= item.dosis[0].fabricante
    this.aplicacion =item.dosis[0].numDosis 
    this.lote= item.dosis[0].lote
    this.caducidad = item.dosis[0].fecha_caducidad
  }

}
