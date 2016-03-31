import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {DireccionCampoClinico} from '../model/direccion-campo-clinico';
import {Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class DireccionCampoClinicoService {
    constructor (private http: Http) {}

    private direccionescamposClinicosUrl = 'http://localhost:9000/resource/direcciones-campos-clinicos';

    findAll() {
        return this.http.get(this.direccionescamposClinicosUrl)
            .map(res => <DireccionCampoClinico[]> res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
