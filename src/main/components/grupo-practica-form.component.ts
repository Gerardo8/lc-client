import {Component} from 'angular2/core';
import {HorarioGrupoPractica} from '../../shared/model/horario-grupo-practica';
import {Input} from 'angular2/core';
import {Academia} from '../../shared/model/academia';
import {CampoClinico} from '../../shared/model/campo-clinico';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
@Component({
    selector:'grupo-practica-form',
    moduleId: module.id,
    templateUrl: './grupo-practica-form.component.html'
})

export class GrupoPracticaFormComponent {

    @Input() horarioGrupoPractica:HorarioGrupoPractica;
    @Input() academias:Academia;
    @Input() camposClinicos:CampoClinico[];

    @Output() submitted = new EventEmitter<HorarioGrupoPractica>();
    @Output() changedAcademia = new EventEmitter<number>();
    @Output() changedCampoClinico = new EventEmitter<number>();


    onSubmit() {
        this.submitted.emit(this.horarioGrupoPractica);
    }

    onChangeAcademia(event) {
        this.changedAcademia.emit(event.target.value);
    }

    onChangeCampoClinico(event) {
        this.changedCampoClinico.emit(event.target.value);
    }

}
