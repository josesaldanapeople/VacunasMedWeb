import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { KeyValue } 
    from '@angular/common';
import { Pipe, PipeTransform } 
    from '@angular/core';
  




@Component({
  selector: 'app-vacuna',
  standalone: true,
  imports: [  MatCardModule,
    MatButtonModule, MatIcon,MatIconModule ,CommonModule,MatToolbarModule,FormsModule, MatFormFieldModule, MatInputModule,MatListModule,
    ],
  templateUrl: './vacuna.component.html',
  styleUrl: './vacuna.component.scss'
})

export  class VacunaComponent {
mapa1:boolean=true
mapa2:boolean=false
buscador:boolean=false
resultado:boolean = false
searchText:string=''
vacunas:string[]=['VAcuna TDAP','Vacuna contra TD','Vacuna TD embarazo']
  agrandar()
  {
    this.mapa1=false
    this.mapa2=true
  }
  cerrar()
  {
    this.mapa1=true
    this.mapa2=false
  }
  searchClose()
  {}
  get filteredItems() {
    if(this.searchText.length==0)
    {return []}
    else{
      let resp:any
      resp=this.vacunas.filter(item =>
        item.toLowerCase().includes(this.searchText.toLowerCase())
      );
      console.log(resp)
      return this.vacunas.filter(item =>
        item.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    
  }
  verbuscador()
  {this.buscador=true
    this.mapa1=false
this.mapa2=false
  }
  desglose(item:string):void
  {
    if(item =='Vacuna contra TD'){
      this.resultado=true
    }
  }
  cerrarbusqueda()
  {
    this.resultado=false
    this.buscador=false
    this.mapa1=true
this.mapa2=false
  }
    
}
