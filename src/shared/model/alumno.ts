import {GrupoPractica} from './grupo-practica';
import {GrupoTeoria} from './grupo-teoria';

export class Alumno {

    id:number;
    numeroCuenta:string;
    nombre:string;
    apellidos:string;
    promedio:number;
    grupoPractica:GrupoPractica;
    grupoTeoria:GrupoTeoria;

}
