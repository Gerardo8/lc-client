import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {HorarioGrupoTeoria} from '../model/horario-grupo-teoria';
@Injectable()
export class HorarioGrupoTeoriaService {
    constructor (private http: Http) {}

    private horariosGruposUrl = 'http://localhost:9000/resource/horarios-grupos-teoria';

    findAll() {
        return this.http.get(this.horariosGruposUrl)
            .map(res => <HorarioGrupoTeoria[]> res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
