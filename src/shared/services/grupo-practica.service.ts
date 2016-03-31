import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {GrupoPractica} from '../model/grupo-practica';
import {Observable} from 'rxjs/Observable';
import {Headers} from 'angular2/http';
import {RequestOptions} from 'angular2/http';
import {Response} from 'angular2/http';
import {HorarioGrupoPractica} from '../model/horario-grupo-practica';
@Injectable()
export class GrupoPracticaService {
    constructor (private http: Http) {}

    private gruposUrl = 'http://localhost:9000/resource/grupos-practica';
    private grupoUrl = 'http://localhost:9000/resource/grupo-practica';

    findAll() {
        return this.http.get(this.gruposUrl)
            .map(res => <GrupoPractica[]> res.json())
            .catch(this.handleError);
    }

    findById(id:number) {
        return this.http.get(this.grupoUrl + '/' + id)
            .map(res => <GrupoPractica> res.json())
            .catch(this.handleError);
    }

    findByAcademiaCampoId(academiaId:number,campoClinicoId:number) {
        return this.http.get(this.gruposUrl + '/academia/' + academiaId + '/campo/' + campoClinicoId)
            .map(res => <GrupoPractica[]> res.json())
            .catch(this.handleError);

    }

    persist(horarioGrupoPractica:HorarioGrupoPractica) {

        let body = JSON.stringify(horarioGrupoPractica);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.grupoUrl, body, options)
            .map(res => res.text())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
