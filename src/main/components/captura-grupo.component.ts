import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {Academia} from '../../shared/model/academia';
import {CampoClinico} from '../../shared/model/campo-clinico';
import {AcademiaService} from '../../shared/services/academia.service';
import {CampoClinicoService} from '../../shared/services/campo-clinico.service';
import {GrupoPracticaService} from '../../shared/services/grupo-practica.service';
import {GrupoPracticaFormComponent} from './grupo-practica-form.component';
import {GrupoPracticaTableComponent} from './grupo-practica-table.component';
import {GrupoPractica} from '../../shared/model/grupo-practica';
import {GrupoTeoriaService} from '../../shared/services/grupo-teoria.service';
import {GrupoTeoria} from '../../shared/model/grupo-teoria';
import {GrupoTeoriaFormComponent} from './grupo-teoria-form.component';
import {GrupoTeoriaTableComponent} from './grupo-teoria-table.component';
@Component({
    selector:'captura-grupo',
    moduleId: module.id,
    templateUrl: './captura-grupo.component.html',
    directives:[
        GrupoPracticaFormComponent,
        GrupoPracticaTableComponent,
        GrupoTeoriaFormComponent,
        GrupoTeoriaTableComponent
    ],
    providers:[
        HTTP_PROVIDERS,
        AcademiaService,
        CampoClinicoService,
        GrupoPracticaService,
        GrupoTeoriaService
    ]
})

export class CapturaGrupoComponent implements OnInit {

    academias:Academia[];
    camposClinicos:CampoClinico[];
    grupoPractica:GrupoPractica = new GrupoPractica();
    grupoTeoria:GrupoTeoria = new GrupoTeoria();
    gruposPractica:GrupoPractica[];
    gruposTeoria:GrupoTeoria[];
    errorMessage:string;

    constructor(
        private academiaService:AcademiaService,
        private campoClinicoService:CampoClinicoService,
        private grupoPracticaService: GrupoPracticaService,
        private grupoTeoriaService:GrupoTeoriaService
    ) {}

    ngOnInit() {
        this.getAcademias();
        this.getCamposClinicos();
        this.getGruposPractica();
        this.getGruposTeoria();
    }

    setAcademiaGrupoPractica(id:number) {
        this.academiaService.findById(id)
            .subscribe(
                response => this.grupoPractica.academia = response,
                error => this.errorMessage = <any>error
            );
    }

    setAcademiaGrupoTeoria(id:number) {
        this.academiaService.findById(id)
            .subscribe(
                response => this.grupoTeoria.academia = response,
                error => this.errorMessage = <any>error
            );
    }

    setCampoClinico(id:number) {
        this.campoClinicoService.findById(id)
            .subscribe(
                response => this.grupoPractica.campoClinico = response,
                error => this.errorMessage = <any>error
            );
    }

    persistGrupoPractica(grupoPractica:GrupoPractica) {
        this.grupoPracticaService.persist(grupoPractica)
            .subscribe(
                response => {
                    this.getGruposPractica();
                    this.grupoPractica = new GrupoPractica();
                    this.grupoPractica = new GrupoPractica();
                },
                error => this.errorMessage = <any>error
            );

    }

    persistGrupoTeoria(grupoTeoria:GrupoTeoria) {
        this.grupoTeoriaService.persist(grupoTeoria)
            .subscribe(
                response => {
                    this.getGruposTeoria();
                    this.grupoTeoria = new GrupoTeoria();
                    this.grupoTeoria = new GrupoTeoria();
                },
                error => this.errorMessage = <any>error
            );

    }

    getAcademias() {
        this.academiaService.findAll()
            .subscribe(
                response => this.academias = response,
                error =>  this.errorMessage = <any>error
            );
    }

    getCamposClinicos() {
        this.campoClinicoService.findAll()
            .subscribe(
                response => this.camposClinicos = response,
                error => this.errorMessage = <any>error
            );
    }

    getGruposPractica() {
        this.grupoPracticaService.findAll()
            .subscribe(
                response => {
                    this.gruposPractica = response;
                },
                error => this.errorMessage = <any>error

            );
    }
    getGruposTeoria() {
        this.grupoTeoriaService.findAll()
            .subscribe(
                response => {
                    this.gruposTeoria = response;
                },
                error => this.errorMessage = <any>error

            );
    }
}
