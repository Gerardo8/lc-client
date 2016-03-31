import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {Academia} from '../../shared/model/academia';
import {CampoClinico} from '../../shared/model/campo-clinico';
import {AcademiaService} from '../../shared/services/academia.service';
import {CampoClinicoService} from '../../shared/services/campo-clinico.service';
import {GrupoPracticaService} from '../../shared/services/grupo-practica.service';
import {HorarioGrupoPractica} from '../../shared/model/horario-grupo-practica';
import {HorarioGrupoPracticaService} from '../../shared/services/horario-grupo-practica.service';
import {GrupoPracticaFormComponent} from './grupo-practica-form.component';
import {GrupoPracticaTableComponent} from './grupo-practica-table.component';
import {GrupoPractica} from '../../shared/model/grupo-practica';
import {HorarioGrupoTeoria} from '../../shared/model/horario-grupo-teoria';
import {HorarioGrupoTeoriaService} from '../../shared/services/horario-grupo-teoria.service';
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
        HorarioGrupoPracticaService,
        GrupoTeoriaService,
        HorarioGrupoTeoriaService
    ]
})

export class CapturaGrupoComponent implements OnInit {

    academias:Academia[];
    camposClinicos:CampoClinico[];
    horarioGrupoPractica:HorarioGrupoPractica = new HorarioGrupoPractica();
    horariosGruposPractica:HorarioGrupoPractica[];
    horarioGrupoTeoria:HorarioGrupoTeoria = new HorarioGrupoTeoria();
    horariosGruposTeoria:HorarioGrupoTeoria[];
    errorMessage:string;

    constructor(
        private academiaService:AcademiaService,
        private campoClinicoService:CampoClinicoService,
        private grupoPracticaService: GrupoPracticaService,
        private horarioGrupoPracticaService:HorarioGrupoPracticaService,
        private grupoTeoriaService:GrupoTeoriaService,
        private horarioGrupoTeoriaService:HorarioGrupoTeoriaService
    ) {}

    ngOnInit() {
        this.horarioGrupoPractica.grupoPractica = new GrupoPractica();
        this.horarioGrupoTeoria.grupoTeoria = new GrupoTeoria();
        this.getAcademias();
        this.getCamposClinicos();
        this.getHorariosGruposPractica();
        this.getHorariosGruposTeoria();
    }

    setAcademiaGrupoPractica(id:number) {
        this.academiaService.findById(id)
            .subscribe(
                response => this.horarioGrupoPractica.grupoPractica.academia = response,
                error => this.errorMessage = <any>error
            );
    }

    setAcademiaGrupoTeoria(id:number) {
        this.academiaService.findById(id)
            .subscribe(
                response => this.horarioGrupoTeoria.grupoTeoria.academia = response,
                error => this.errorMessage = <any>error
            );
    }

    setCampoClinico(id:number) {
        this.campoClinicoService.findById(id)
            .subscribe(
                response => this.horarioGrupoPractica.grupoPractica.campoClinico = response,
                error => this.errorMessage = <any>error
            );
    }

    persistGrupoPractica(horarioGrupoPractica:HorarioGrupoPractica) {
        this.grupoPracticaService.persist(horarioGrupoPractica)
            .subscribe(
                response => {
                    this.getHorariosGruposPractica();
                    this.horarioGrupoPractica = new HorarioGrupoPractica();
                    this.horarioGrupoPractica.grupoPractica = new GrupoPractica();
                },
                error => this.errorMessage = <any>error
            );

    }

    persistGrupoTeoria(horarioGrupoTeoria:HorarioGrupoTeoria) {
        this.grupoTeoriaService.persist(horarioGrupoTeoria)
            .subscribe(
                response => {
                    this.getHorariosGruposTeoria();
                    this.horarioGrupoTeoria = new HorarioGrupoTeoria();
                    this.horarioGrupoTeoria.grupoTeoria = new GrupoTeoria();
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

    getHorariosGruposPractica() {
        this.horarioGrupoPracticaService.findAll()
            .subscribe(
                response => {
                    this.horariosGruposPractica = response;
                },
                error => this.errorMessage = <any>error

            );
    }
    getHorariosGruposTeoria() {
        this.horarioGrupoTeoriaService.findAll()
            .subscribe(
                response => {
                    this.horariosGruposTeoria = response;
                },
                error => this.errorMessage = <any>error

            );
    }
}
