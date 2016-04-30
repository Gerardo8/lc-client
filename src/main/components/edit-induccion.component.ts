import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Induccion} from '../../shared/model/induccion';
import {InduccionService} from '../../shared/services/induccion.service';
import {InduccionEditFormComponent} from './induccion-edit-form.component';

@Component({
  selector:'edit-induccion',
  moduleId: module.id,
  templateUrl: './edit-induccion.component.html',
  directives:[
    InduccionEditFormComponent
  ],
  providers:[
    HTTP_PROVIDERS,
    InduccionService
  ]
})

export class EditInduccionComponent implements OnInit {

  induccion:Induccion = new Induccion();
  inducciones:Induccion[];
  currentInduccionId:number;
  formActive:boolean = false;
  errorMessage:string;

  constructor(
    private induccionService:InduccionService,
    private routeParams:RouteParams
  ) {}

  ngOnInit() {
    this.currentInduccionId = +this.routeParams.get('id');
    this.findInduccionById(this.currentInduccionId);
  }


  updateInduccion() {
    this.induccionService.update(this.induccion)
      .subscribe(
        response => {
          this.formActive = false;
        },
        error => this.errorMessage = <any>error
      );
  }

  findInduccionById(id:number) {
    this.induccionService.findById(id)
      .subscribe(
        response => {
          this.induccion = response;
        },
        error => this.errorMessage = <any>error
      );
  }
  goBack() {
    this.formActive = false;
    window.history.back();
  }
}
