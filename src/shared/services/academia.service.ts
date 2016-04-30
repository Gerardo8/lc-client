import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
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

  persist(academia:Academia) {
    let body = JSON.stringify(academia);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.academiaUrl, body, options)
      .map(res => res.text())
      .catch(this.handleError);
  }

  update(academia:Academia) {
    let body = JSON.stringify( academia );
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.academiaUrl,body,options)
      .map(res => res.text())
      .catch(this.handleError);
  }

  delete(academiaId:number) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.academiaUrl + '/' + academiaId,options)
      .map(res => res.text())
      .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
