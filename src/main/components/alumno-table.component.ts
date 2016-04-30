import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Alumno} from '../../shared/model/alumno';

@Component({
    selector:'alumno-table',
    moduleId: module.id,
    templateUrl: './alumno-table.component.html'
})

export class AlumnoTableComponent {

    @Input() alumnos:Alumno[];

    @Output() selectAlumno = new EventEmitter<number>();
    @Output() deleteAlumno = new EventEmitter<number>();

    onClickAlumno(id:number) {
        this.selectAlumno.emit(id);
    }
    onDeleteAlumno(id:number) {
        this.deleteAlumno.emit(id);
    }
}
