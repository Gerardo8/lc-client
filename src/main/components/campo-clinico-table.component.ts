import {Component} from 'angular2/core';
import {DireccionCampoClinico} from '../../shared/model/direccion-campo-clinico';
import {Input} from 'angular2/core';

@Component({
    selector:'campo-clinico-table',
    moduleId: module.id,
    templateUrl: './campo-clinico-table.component.html'
})

export class CampoClinicoTableComponent {

    @Input() direccionesCamposClinicos:DireccionCampoClinico[];

}
