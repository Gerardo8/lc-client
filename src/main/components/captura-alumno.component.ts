import {Component} from 'angular2/core';
import {AlumnoService} from '../../shared/services/alumno.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Alumno} from '../../shared/model/alumno';
import {OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {DocumentoAlumnoService} from '../../shared/services/documento-alumno.service';
import {AlumnoViewComponent} from './alumno-view.component';
import {AlumnoFormComponent} from './alumno-form.component';
import {GrupoPracticaService} from '../../shared/services/grupo-practica.service';
import {GrupoTeoriaService} from '../../shared/services/grupo-teoria.service';
import {GrupoPractica} from '../../shared/model/grupo-practica';
import {GrupoTeoria} from '../../shared/model/grupo-teoria';
import {DocumentoAlumno} from '../../shared/model/documento-alumno';
import {AcademiaService} from '../../shared/services/academia.service';
import {CampoClinicoService} from '../../shared/services/campo-clinico.service';
import {Academia} from '../../shared/model/academia';
import {CampoClinico} from '../../shared/model/campo-clinico';
@Component({
    selector:'captura-alumno',
    moduleId: module.id,
    templateUrl: './captura-alumno.component.html',
    directives:[
        AlumnoViewComponent,
        AlumnoFormComponent
    ],
    providers:[
        HTTP_PROVIDERS,
        AlumnoService,
        DocumentoAlumnoService,
        GrupoPracticaService,
        GrupoTeoriaService,
        AcademiaService,
        CampoClinicoService
    ]
})

export class CapturaAlumnoComponent implements OnInit {

    alumno:Alumno;
    documentoAlumno:DocumentoAlumno;
    academias:Academia[];
    camposClinicos:CampoClinico[];
    currentAlumnoId:number;
    formActive:boolean = false;
    academiaId:number;
    campoClinicoId:number;
    gruposPractica:GrupoPractica[];
    gruposTeoria:GrupoTeoria[];
    errorMessage:string;


    constructor(
        private routeParams:RouteParams,
        private alumnoService:AlumnoService,
        private documentoAlumnoService:DocumentoAlumnoService,
        private grupoPracticaService:GrupoPracticaService,
        private grupoTeoriaService:GrupoTeoriaService,
        private academiaService:AcademiaService,
        private campoClinicoService:CampoClinicoService
    ) {}

    ngOnInit() {
        this.currentAlumnoId = +this.routeParams.get('id');
        this.findAlumnoById(this.currentAlumnoId);
        this.findDocumentoByAlumnoId(this.currentAlumnoId);
        this.getAcademias();
        this.getCamposClinicos();
    }

    findAlumnoById(id:number) {
        this.alumnoService.findById(id)
            .subscribe(
                response => {
                    this.alumno = response;
                },
                error => this.errorMessage = <any>error
            );
    }

    findDocumentoByAlumnoId(id:number) {
        this.documentoAlumnoService.findByAlumnoId(id)
            .subscribe(
                response => {
                    this.documentoAlumno = response;
                },
                error => this.errorMessage = <any>error
            );
    }

    setGrupoPractica(id:number) {
        this.grupoPracticaService.findById(id)
            .subscribe(
                response => {
                    this.alumno.grupoPractica = response;
                },
                error => this.errorMessage = <any>error
            );
    }

    setGrupoTeoria(id:number) {
        this.grupoTeoriaService.findById(id)
            .subscribe(
                response => {
                    this.alumno.grupoTeoria = response;
                },
                error => this.errorMessage = <any>error
            );
    }

    updateAlumno(alumno:Alumno) {
        this.alumnoService.update(alumno)
            .subscribe(
                response => {
                    this.formActive = false;
                },
                error => this.errorMessage = <any>error
            );
    }

    editAlumno() {
        this.formActive = true;
    }

    createDocument() {
        this.documentoAlumnoService.persist(this.alumno)
            .subscribe(
                response => this.findDocumentoByAlumnoId(this.currentAlumnoId),
                error => this.errorMessage = <any>error
            );
    }

    updateDocument() {
        this.documentoAlumnoService.update(this.alumno)
            .subscribe(
                response => this.findDocumentoByAlumnoId(this.currentAlumnoId),
                error => this.errorMessage = <any>error
            );
    }

    cancelEditAlumno() {
        this.formActive = false;
    }

    getGruposPracticaByAcademiaCampoId() {
        this.grupoPracticaService.findByAcademiaCampoId(this.academiaId,this.campoClinicoId)
            .subscribe(
                response => this.gruposPractica = response,
                error => this.errorMessage = <any>error
            );
    }

    getGruposTeoriaByAcademiaId() {
        this.grupoTeoriaService.findByAcademiaId(this.academiaId)
            .subscribe(
                response => this.gruposTeoria = response,
                error => this.errorMessage = <any>error
            );
    }


    setAcademiaId(id:number) {
        this.academiaId = id;
        if(this.academiaId && this.campoClinicoId) {
            this.getGrupos();
        }
    }

    setCampoClinicoId(id:number) {
        this.campoClinicoId = id;
        if(this.academiaId && this.campoClinicoId) {
            this.getGrupos();
        }
    }

    getGrupos() {
            this.getGruposPracticaByAcademiaCampoId();
            this.getGruposTeoriaByAcademiaId();
    }

    getCamposClinicos() {
        this.campoClinicoService.findAll()
            .subscribe(
                response => this.camposClinicos = response,
                error => this.errorMessage = <any>error
            );
    }

    getAcademias() {
        this.academiaService.findAll()
            .subscribe(
                response => this.academias = response,
                error => this.errorMessage = <any>error
            );
    }

    goBack() {
        this.formActive = false;
        window.history.back();
    }
}
