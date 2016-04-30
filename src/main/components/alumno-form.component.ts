import {Component} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Input} from 'angular2/core';
import {Alumno} from '../../shared/model/alumno';
import {GrupoTeoria} from '../../shared/model/grupo-teoria';
import {GrupoPractica} from '../../shared/model/grupo-practica';
import {Academia} from '../../shared/model/academia';
import {CampoClinico} from '../../shared/model/campo-clinico';

@Component({
    selector:'alumno-form',
    moduleId: module.id,
    templateUrl: './alumno-form.component.html'
})

export class AlumnoFormComponent {

    @Input() alumno:Alumno;
    @Input() gruposTeoria:GrupoTeoria[];
    @Input() gruposPractica:GrupoPractica[];
    @Input() academias:Academia[];
    @Input() camposClinicos:CampoClinico[];

    @Output() updateAlumno = new EventEmitter<Alumno>();
    @Output() changedGrupoPractica = new EventEmitter<number>();
    @Output() changedGrupoTeoria = new EventEmitter<number>();
    @Output() changedAcademia = new EventEmitter<number>();
    @Output() changedCampoClinico = new EventEmitter<number>();

    onChangeAcademia(event) {
        this.changedAcademia.emit(event.target.value);
    }

    onChangeCampoClinico(event) {
        this.changedCampoClinico.emit(event.target.value);
    }

    onChangeGrupoPractica(event) {
        this.changedGrupoPractica.emit(event.target.value);
    }

    onChangeGrupoTeoria(event) {
        this.changedGrupoTeoria.emit(event.target.value);
    }

    onSubmit() {
        this.updateAlumno.emit(this.alumno);
    }

}
