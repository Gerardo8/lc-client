import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Induccion} from '../../shared/model/induccion';
import {InduccionService} from '../../shared/services/induccion.service';
import {InduccionFormComponent} from './induccion-form.component';
import {InduccionTableComponent} from './induccion-table.component';

@Component({
  selector:'captura-induccion',
  moduleId: module.id,
  templateUrl: './captura-induccion.component.html',
  directives:[
    InduccionFormComponent,
    InduccionTableComponent
  ],
  providers:[
    HTTP_PROVIDERS,
    InduccionService
  ]
})

export class CapturaInduccionComponent implements OnInit {
  induccion:Induccion = new Induccion();
  inducciones:Induccion[];
  currentAcademiaId:number;
  errorMessage:string;
  constructor(
    private induccionService:InduccionService,
    private routeParams:RouteParams,
    private router:Router
  ) {}

  ngOnInit() {
    this.currentAcademiaId = +this.routeParams.get('id');
    this.getInduccionesByAcademiaId(this.currentAcademiaId);
  }
  persistInduccion() {
    this.induccionService.persist(this.induccion,this.currentAcademiaId)
      .subscribe(
        response => {
          this.getInduccionesByAcademiaId(this.currentAcademiaId);
          this.induccion = new Induccion();
        },
        error =>  this.errorMessage = <any>error
      );
  }
  getInduccionesByAcademiaId(academiaId:number) {
    this.induccionService.findByAcademiaId(academiaId)
      .subscribe(
        response => this.inducciones = response,
        error => this.errorMessage = <any>error
      );
  }
  gotoInduccion(id:number) {
    this.router.navigate(['EditInduccion',{id:id}]);
  }
}
