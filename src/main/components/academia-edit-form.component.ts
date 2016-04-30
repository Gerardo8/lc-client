import {Component} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Input} from 'angular2/core';
import {Academia} from '../../shared/model/academia';

@Component({
  selector:'academia-edit-form',
  moduleId: module.id,
  templateUrl: './academia-edit-form.component.html'
})

export class AcademiaEditFormComponent {
  @Input() academia:Academia;
  @Output() submitted = new EventEmitter();
  onSubmit() {
    this.submitted.emit({});
  }
}
