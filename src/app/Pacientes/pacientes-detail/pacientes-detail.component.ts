import { Component, Input, OnInit } from '@angular/core';
import { PacientesDetail } from '../pacientesDetail';
import { Paciente } from '../paciente';


@Component({
  selector: 'app-pacientes-detail',
  templateUrl: './pacientes-detail.component.html',
  styleUrls: ['./pacientes-detail.component.css']
})
export class PacientesDetailComponent implements OnInit {

  @Input() pacientesDetail !: Paciente;

  constructor() { }

  ngOnInit() {
  }

}
