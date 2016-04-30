  import {Injectable} from 'angular2/core';
  import {Http} from 'angular2/http';
  import {Induccion} from '../model/induccion';
  import {Observable} from 'rxjs/Observable';
  import {Headers} from 'angular2/http';
  import {RequestOptions} from 'angular2/http';
  import {Response} from 'angular2/http';
  @Injectable()
  export class InduccionService {
      constructor (private http: Http) {}

      private induccionesUrl = 'http://localhost:9000/resource/inducciones';
      private induccionUrl = 'http://localhost:9000/resource/induccion';

      findAll () {
          return this.http.get(this.induccionesUrl)
            .map(res => <Induccion[]> res.json())
            .catch(this.handleError);
      }

      findById(id:number) {
          return this.http.get(this.induccionUrl + '/' + id)
              .map(res => <Induccion> res.json())
              .catch(this.handleError);
      }

      persist(induccion:Induccion,academiaId:number) {

          let body = JSON.stringify( induccion );
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });

          return this.http.post(this.induccionUrl + '/academia/' + academiaId, body, options)
              .map(res => res.text())
              .catch(this.handleError);
      }
      findByAcademiaId(academiaId:number) {
          return this.http.get(this.induccionesUrl + '/academia/' + academiaId)
              .map(res => <Induccion[]> res.json())
              .catch(this.handleError);

      }
      update(induccion:Induccion) {

          let body = JSON.stringify( induccion );
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });

          return this.http.put(this.induccionUrl,body,options)
            .map(res => res.text())
            .catch(this.handleError);
      }

      delete(induccionId:number) {
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http.delete(this.induccionUrl + '/' + induccionId,options)
            .map(res => res.text())
            .catch(this.handleError);
      }

      private handleError (error: Response) {
          console.error(error);
          return Observable.throw(error.json().error || 'Server error');
      }
  }
