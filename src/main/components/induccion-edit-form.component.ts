import {Component} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Input} from 'angular2/core';
import {Induccion} from '../../shared/model/induccion';

@Component({
  selector:'induccion-edit-form',
  moduleId: module.id,
  templateUrl: './induccion-edit-form.component.html'
})

export class InduccionEditFormComponent {
  @Input() induccion:Induccion;
  @Output() submitted = new EventEmitter();
  onSubmit() {
    this.submitted.emit({});
  }
}
