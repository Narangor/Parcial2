import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PacientesListComponent],
  exports: [PacientesListComponent]
})
export class PacientesModule { }
