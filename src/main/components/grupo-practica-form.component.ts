import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {Academia} from '../../shared/model/academia';
import {CampoClinico} from '../../shared/model/campo-clinico';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {GrupoPractica} from '../../shared/model/grupo-practica';
@Component({
    selector:'grupo-practica-form',
    moduleId: module.id,
    templateUrl: './grupo-practica-form.component.html'
})

export class GrupoPracticaFormComponent {

    @Input() grupoPractica:GrupoPractica;
    @Input() academias:Academia;
    @Input() camposClinicos:CampoClinico[];

    @Output() submitted = new EventEmitter<GrupoPractica>();
    @Output() changedAcademia = new EventEmitter<number>();
    @Output() changedCampoClinico = new EventEmitter<number>();


    onSubmit() {
        this.submitted.emit(this.grupoPractica);
    }

    onChangeAcademia(event) {
        this.changedAcademia.emit(event.target.value);
    }

    onChangeCampoClinico(event) {
        this.changedCampoClinico.emit(event.target.value);
    }

}
