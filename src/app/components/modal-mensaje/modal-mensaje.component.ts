import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-mensaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-mensaje.component.html',
  styleUrl: './modal-mensaje.component.scss'
})
export class ModalMensajeComponent {
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any)
 {
   
 }
}
