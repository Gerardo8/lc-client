import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {Academia} from '../../shared/model/academia';
import {AcademiaService} from '../../shared/services/academia.service';
import {AcademiaFormComponent} from './academia-form.component';
import {AcademiaTableComponent} from './academia-table.component';
import {Router} from 'angular2/router';

@Component({
  selector:'captura-academia',
  moduleId: module.id,
  templateUrl: './captura-academia.component.html',
  directives:[
    AcademiaFormComponent,
    AcademiaTableComponent
  ],
  providers:[
    HTTP_PROVIDERS,
    AcademiaService
  ]
})

export class CapturaAcademiaComponent implements OnInit {

  academia:Academia = new Academia();
  academias:Academia[];
  errorMessage:string;



  constructor(
    private academiaService:AcademiaService,
    private router:Router
  ) {}

  ngOnInit() {
    this.getAcademias();
  }


  persistAcademia() {
    this.academiaService.persist(this.academia)
      .subscribe(
        response => {
          this.getAcademias();
          this.academia = new Academia();
        },
        error =>  this.errorMessage = <any>error
      );
  }

  getAcademias() {
    this.academiaService.findAll()
      .subscribe(
        response => this.academias = response,
        error => this.errorMessage = <any>error
      );
  }
  gotoAcademia(id:number) {
    this.router.navigate(['EditAcademia',{id:id}]);
  }
}
