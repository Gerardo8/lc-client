import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Response} from 'angular2/http';
import {DocumentoAlumno} from '../model/documento-alumno';
@Injectable()
export class DocumentoAlumnoService {
    constructor (private http: Http) {}

    private documentoAlumnoUrl = 'http://localhost:9000/resource/documento-alumno';

    findByAlumnoId(id:number) {
        return this.http.get(this.documentoAlumnoUrl + '/alumno/' + id)
            .map(res => <DocumentoAlumno> res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
