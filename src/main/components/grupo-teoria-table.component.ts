import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {GrupoTeoria} from '../../shared/model/grupo-teoria';

@Component({
    selector:'grupo-teoria-table',
    moduleId: module.id,
    templateUrl: './grupo-teoria-table.component.html'
})

export class GrupoTeoriaTableComponent {

    @Input() gruposTeoria:GrupoTeoria[];

}
