import {Component} from 'angular2/core';
import {DireccionCampoClinico} from '../../shared/model/direccion-campo-clinico';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Input} from 'angular2/core';

@Component({
    selector:'campo-clinico-form',
    moduleId: module.id,
    templateUrl: './campo-clinico-form.component.html'
})

export class CampoClinicoFormComponent {

    @Input() direccionCampoClinico:DireccionCampoClinico;
    @Output() submitted = new EventEmitter<DireccionCampoClinico>();

    onSubmit() {
        this.submitted.emit(this.direccionCampoClinico);
    }

}
