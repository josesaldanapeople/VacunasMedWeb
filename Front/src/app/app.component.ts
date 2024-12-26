import { MatTabsModule } from '@angular/material/tabs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { VacunaComponent } from './components/vacuna/vacuna.component';


import { HeaderComponent } from "./components/header/header.component";
import { EsquemaVacunacionComponent } from "./components/esquema-vacunacion/esquema-vacunacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, MatToolbarModule, MatTabsModule,  VacunaComponent, HeaderComponent, EsquemaVacunacionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDropdownVisible: boolean = false;

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}


