/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
// import { faker } from '@faker-js/faker';


import { PacientesListComponent } from './pacientes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

describe('PacientesListComponent', () => {
  let component: PacientesListComponent;
  let fixture: ComponentFixture<PacientesListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PacientesListComponent],
      providers: [PacienteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesListComponent);
    component = fixture.componentInstance;

    
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
