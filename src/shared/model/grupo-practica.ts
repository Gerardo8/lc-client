import {Academia} from './academia';
import {CampoClinico} from  './campo-clinico';

export class GrupoPractica {

    id:number;
    nombre:string;
    tipo:string;
    fechaInicio:string;
    fechaFin:string;
    turno:string;
    lugares:number;
    academia:Academia;
    campoClinico:CampoClinico;

}
