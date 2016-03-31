import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {CampoClinicoService} from '../../shared/services/campo-clinico.service';
import {DireccionCampoClinico} from '../../shared/model/direccion-campo-clinico';
import {CampoClinico} from '../../shared/model/campo-clinico';
import {DireccionCampoClinicoService} from '../../shared/services/direccion-campo-clinico.service';
import {CampoClinicoFormComponent} from './campo-clinico-form.component';
import {CampoClinicoTableComponent} from './campo-clinico-table.component';

@Component({
    selector:'captura-campo-clinico',
    moduleId: module.id,
    templateUrl: './captura-campo-clinico.component.html',
    directives:[
        CampoClinicoFormComponent,
        CampoClinicoTableComponent
    ],
    providers:[
        HTTP_PROVIDERS,
        CampoClinicoService,
        DireccionCampoClinicoService
    ]
})

export class CapturaCampoClinicoComponent implements OnInit {

    direccionCampoClinico:DireccionCampoClinico = new DireccionCampoClinico();
    direccionesCamposClinicos:DireccionCampoClinico[];
    errorMessage:string;



    constructor(
        private campoClinicoService:CampoClinicoService,
        private direccionCampoClinicoService:DireccionCampoClinicoService
    ) {}

    ngOnInit() {
        this.direccionCampoClinico.campoClinico = new CampoClinico();
        this.getDireccionesCamposClinicos();
    }


    persistCampoClinico(direccionCampoClinico:DireccionCampoClinico) {
        this.campoClinicoService.persist(direccionCampoClinico)
            .subscribe(
                response => {
                    this.getDireccionesCamposClinicos();
                    this.direccionCampoClinico = new DireccionCampoClinico();
                    this.direccionCampoClinico.campoClinico = new CampoClinico();
                },
                error =>  this.errorMessage = <any>error
            );
    }

    getDireccionesCamposClinicos() {
        this.direccionCampoClinicoService.findAll()
            .subscribe(
                response => this.direccionesCamposClinicos = response,
                error => this.errorMessage = <any>error
            );
    }
}
