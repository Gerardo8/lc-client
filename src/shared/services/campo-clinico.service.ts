import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {CampoClinico} from '../model/campo-clinico';
import {DireccionCampoClinico} from '../model/direccion-campo-clinico';
import {Observable} from 'rxjs/Observable';
import {Headers} from 'angular2/http';
import {RequestOptions} from 'angular2/http';
import {Response} from 'angular2/http';
@Injectable()
export class CampoClinicoService {
    constructor (private http: Http) {}

    private camposClinicosUrl = 'http://localhost:9000/resource/campos-clinicos';
    private campoClinicoUrl = 'http://localhost:9000/resource/campo-clinico';

    findById(id:number) {
        return this.http.get(this.campoClinicoUrl + '/' + id)
            .map(res => <CampoClinico> res.json())
            .catch(this.handleError);
    }

    findAll() {
        return this.http.get(this.camposClinicosUrl)
            .map(res => <CampoClinico[]> res.json())
            .catch(this.handleError);
    }

    persist(direccionCampoClinico:DireccionCampoClinico) {

        let body = JSON.stringify(direccionCampoClinico);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.campoClinicoUrl, body, options)
            .map(res => res.text())
            .catch(this.handleError);
    }


    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
