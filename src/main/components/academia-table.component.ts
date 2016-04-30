import {Component, Output} from 'angular2/core';
import {Input} from 'angular2/core';
import {Academia} from '../../shared/model/academia';
import {EventEmitter} from 'angular2/core';


@Component({
  selector:'academia-table',
  moduleId: module.id,
  templateUrl: './academia-table.component.html'
})

export class AcademiaTableComponent {
  @Input() academias:Academia[];
  @Output() selectAcademia = new EventEmitter<number>();
  onClickAcademia(id:number) {
    this.selectAcademia.emit(id);
  }
}
