import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {GrupoPractica} from '../../shared/model/grupo-practica';

@Component({
    selector:'grupo-practica-table',
    moduleId: module.id,
    templateUrl: './grupo-practica-table.component.html'
})

export class GrupoPracticaTableComponent {

    @Input() gruposPractica:GrupoPractica[];

}
