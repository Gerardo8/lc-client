import {Component, Output} from 'angular2/core';
import {Input} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Induccion} from '../../shared/model/induccion';


@Component({
  selector:'induccion-table',
  moduleId: module.id,
  templateUrl: './induccion-table.component.html'
})

export class InduccionTableComponent {
  @Input() inducciones:Induccion[];
  @Output() selectInduccion = new EventEmitter<number>();
  onClickInduccion(id:number) {
    this.selectInduccion.emit(id);
  }
}
