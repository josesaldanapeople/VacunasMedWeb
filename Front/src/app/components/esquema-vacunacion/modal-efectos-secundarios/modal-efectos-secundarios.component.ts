import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-efectos-secundarios',
  standalone: true,
  imports: [],
  templateUrl: './modal-efectos-secundarios.component.html',
  styleUrl: './modal-efectos-secundarios.component.scss'
})
export class ModalEfectosSecundariosComponent {
  constructor(public dialogRef: MatDialogRef<ModalEfectosSecundariosComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
