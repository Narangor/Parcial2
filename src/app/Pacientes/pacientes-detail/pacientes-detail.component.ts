import { Component, Input, OnInit } from '@angular/core';
import { PacientesDetail } from '../pacientesDetail';

@Component({
  selector: 'app-pacientes-detail',
  templateUrl: './pacientes-detail.component.html',
  styleUrls: ['./pacientes-detail.component.css']
})
export class PacientesDetailComponent implements OnInit {

  @Input() pacientesDetail !: PacientesDetail;

  constructor() { }

  ngOnInit() {
  }

}
