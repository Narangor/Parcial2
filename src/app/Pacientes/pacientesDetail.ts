import { Paciente } from "./paciente";

export class PacientesDetail extends Paciente {

    constructor(nombre: string, edad: number, diagnostico: string) {
        super(nombre, edad, diagnostico);
    }
}
