import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {Academia} from '../../shared/model/academia';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {GrupoTeoria} from '../../shared/model/grupo-teoria';
@Component({
    selector:'grupo-teoria-form',
    moduleId: module.id,
    templateUrl: './grupo-teoria-form.component.html'
})

export class GrupoTeoriaFormComponent {

    @Input() grupoTeoria:GrupoTeoria;
    @Input() academias:Academia;

    @Output() submitted = new EventEmitter<GrupoTeoria>();
    @Output() changedAcademia = new EventEmitter<number>();

    onSubmit() {
        this.submitted.emit(this.grupoTeoria);
    }

    onChangeAcademia(event) {
        this.changedAcademia.emit(event.target.value);
    }

}
