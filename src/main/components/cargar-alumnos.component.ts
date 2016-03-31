import {Component} from 'angular2/core';
import {ExcelAlumnosUploadComponent} from './excel-alumnos-upload.component';
import {AlumnoService} from '../../shared/services/alumno.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {Alumno} from '../../shared/model/alumno';
import {AlumnoTableComponent} from './alumno-table.component';
import {Router} from 'angular2/router';

@Component({
    selector:'cargar-alumnos',
    moduleId: module.id,
    templateUrl: './cargar-alumnos.component.html',
    directives:[
        ExcelAlumnosUploadComponent,
        AlumnoTableComponent
    ],
    providers:[
        HTTP_PROVIDERS,
        AlumnoService
    ]
})

export class CargarAlumnosComponent implements OnInit {

    file: File;
    alumnos:Alumno[];
    errorMessage:string;

    constructor(
        private alumnoService : AlumnoService,
        private router:Router
    ) {}

    ngOnInit() {
        this.getAlumnos();
    }

    getAlumnos() {
        this.alumnoService.findAll()
            .subscribe(
                response => {
                    this.alumnos = response;
                },
                error => this.errorMessage = <any>error
            );
    }

    handleDropFile(file:File) {
        this.file = file;
    }

    handleChangeFile(file:File) {
        this.file = file;
    }

    upload() {

        this.alumnoService.persistAlumnosFromExcel(this.file).then((result) => {
            console.log(result);
            this.file = null;
            this.getAlumnos(); // *observable
        }, (error) => {
            console.error(error);
        });

    }

    gotoAlumno(id:number) {
        this.router.navigate(['CapturaAlumno',{id:id}]);
    }
}
