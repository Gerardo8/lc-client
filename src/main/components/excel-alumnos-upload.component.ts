import {Component} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Input} from 'angular2/core';

@Component({
    selector:'excel-alumnos-upload',
    moduleId: module.id,
    templateUrl: './excel-alumnos-upload.component.html'
})

export class ExcelAlumnosUploadComponent {

    @Input() file : File;

    @Output() draggedFile = new EventEmitter<File>();
    @Output() changedFile = new EventEmitter<File>();
    @Output() uploadFile = new EventEmitter();

    onDropFile(event) {
        if(
            event.dataTransfer.files[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            || event.dataTransfer.files[0].type === 'application/vnd.ms-excel'
        ) {
            this.draggedFile.emit(event.dataTransfer.files[0]);
            this.file = event.dataTransfer.files[0];
        } else {
            alert('El archivo tiene que ser xlsx o xls!');
        }
    }

    onChangeFile(event) {
        this.changedFile.emit(event.target.files[0]);
        this.file = event.target.files[0];
    }

    onClickUpload() {
        this.uploadFile.emit({});
    }
}
