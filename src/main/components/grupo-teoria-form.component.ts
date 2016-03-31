import {Component} from 'angular2/core';
import {HorarioGrupoTeoria} from '../../shared/model/horario-grupo-teoria';
import {Input} from 'angular2/core';
import {Academia} from '../../shared/model/academia';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
@Component({
    selector:'grupo-teoria-form',
    moduleId: module.id,
    templateUrl: './grupo-teoria-form.component.html'
})

export class GrupoTeoriaFormComponent {

    @Input() horarioGrupoTeoria:HorarioGrupoTeoria;
    @Input() academias:Academia;

    @Output() submitted = new EventEmitter<HorarioGrupoTeoria>();
    @Output() changedAcademia = new EventEmitter<number>();

    onSubmit() {
        this.submitted.emit(this.horarioGrupoTeoria);
    }

    onChangeAcademia(event) {
        this.changedAcademia.emit(event.target.value);
    }

}
