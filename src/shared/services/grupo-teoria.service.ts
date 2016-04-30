import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {GrupoTeoria} from '../model/grupo-teoria';
import {Observable} from 'rxjs/Observable';
import {Headers} from 'angular2/http';
import {RequestOptions} from 'angular2/http';
import {Response} from 'angular2/http';
@Injectable()
export class GrupoTeoriaService {
    constructor (private http: Http) {}

    private gruposUrl = 'http://localhost:9000/resource/grupos-teoria';
    private grupoUrl = 'http://localhost:9000/resource/grupo-teoria';

    findAll() {
        return this.http.get(this.gruposUrl)
            .map(res => <GrupoTeoria[]> res.json())
            .catch(this.handleError);
    }

    findById(id:number) {
        return this.http.get(this.grupoUrl + '/' + id)
            .map(res => <GrupoTeoria> res.json())
            .catch(this.handleError);
    }

    findByAcademiaId(academiaId:number) {
        return this.http.get(this.gruposUrl + '/academia/' + academiaId)
            .map(res => <GrupoTeoria[]> res.json())
            .catch(this.handleError);

    }

    persist(grupoTeoria:GrupoTeoria) {

        let body = JSON.stringify(grupoTeoria);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.grupoUrl, body, options)
            .map(res => res.text())
            .catch(this.handleError);
    }

    delete(grupoTeoriaId:number) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.grupoUrl + '/' + grupoTeoriaId,options)
            .map(res => res.text())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
