import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {

  pacientes: Array<Paciente> = [];
  conteo: number = 0;
  selectedPaciente !: Paciente;
  selected: Boolean = false;

  constructor(
    private pacienteService: PacienteService
  ) { }

  getPacientes(): void {
    this.pacienteService.getPacientes().subscribe((paciente) => {
      this.pacientes = paciente;

      for (let i = 0; i < this.pacientes.length; i++) {
        if (this.pacientes[i].edad < 18) {
          this.conteo +=1;
        }
      }
    });
  }

  onSelected(paciente: Paciente): void {
    this.selectedPaciente = paciente;
    this.selected = true;
  }

  ngOnInit() {
    this.getPacientes();
  }

}
