import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {Academia} from '../../shared/model/academia';
import {AcademiaService} from '../../shared/services/academia.service';
import {RouteParams} from 'angular2/router';
import {AcademiaEditFormComponent} from './academia-edit-form.component';
import {CapturaInduccionComponent} from './captura-induccion.component';

@Component({
  selector:'edit-academia',
  moduleId: module.id,
  templateUrl: './edit-academia.component.html',
  directives:[
    AcademiaEditFormComponent,
    CapturaInduccionComponent
  ],
  providers:[
    HTTP_PROVIDERS,
    AcademiaService
  ]
})

export class EditAcademiaComponent implements OnInit {

  academia:Academia = new Academia();
  academias:Academia[];
  currentAcademiaId:number;
  formActive:boolean = false;
  errorMessage:string;



  constructor(
    private academiaService:AcademiaService,
    private routeParams:RouteParams
  ) {}

  ngOnInit() {
    this.currentAcademiaId = +this.routeParams.get('id');
    this.findAcademiaById(this.currentAcademiaId);
  }


  updateAcademia() {
    this.academiaService.update(this.academia)
      .subscribe(
        response => {
          this.formActive = false;
        },
        error => this.errorMessage = <any>error
      );
  }

  findAcademiaById(id:number) {
    this.academiaService.findById(id)
      .subscribe(
        response => {
          this.academia = response;
        },
        error => this.errorMessage = <any>error
      );
  }
  goBack() {
    this.formActive = false;
    window.history.back();
  }
}
