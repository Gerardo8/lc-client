import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Academia} from '../model/academia';
import {Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class AcademiaService {
    constructor (private http: Http) {}

    private academiasUrl = 'http://localhost:9000/resource/academias';
    private academiaUrl = 'http://localhost:9000/resource/academia';

    findAll () {
        return this.http.get(this.academiasUrl)
            .map(res => <Academia[]> res.json())
            .catch(this.handleError);
    }

    findById(id:number) {
        return this.http.get(this.academiaUrl + '/' + id)
            .map(res => <Academia> res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
