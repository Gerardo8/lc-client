import {Component} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Input} from 'angular2/core';
import {Alumno} from '../../shared/model/alumno';
import {DocumentoAlumno} from '../../shared/model/documento-alumno';

@Component({
    selector:'alumno-view',
    moduleId: module.id,
    templateUrl: './alumno-view.component.html'
})

export class AlumnoViewComponent {

    @Input() alumno:Alumno;
    @Input() documentoAlumno:DocumentoAlumno;
    @Input() formActive:boolean;

    @Output() editAlumno = new EventEmitter<boolean>();
    @Output() downloadDocumento = new EventEmitter<number>();

    onEdit() {
        this.editAlumno.emit(true);
    }
}
