import {Component} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Input} from 'angular2/core';
import {Academia} from '../../shared/model/academia';

@Component({
  selector:'academia-form',
  moduleId: module.id,
  templateUrl: './academia-form.component.html'
})

export class AcademiaFormComponent {
  @Input() academia:Academia;
  @Output() submitted = new EventEmitter();

  onSubmit() {
    this.submitted.emit({});
  }
}
