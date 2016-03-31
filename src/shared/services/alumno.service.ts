import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Alumno} from '../model/alumno';
import {Observable} from 'rxjs/Observable';
import {Headers} from 'angular2/http';
import {RequestOptions} from 'angular2/http';
import {Response} from 'angular2/http';
@Injectable()
export class AlumnoService {
    constructor (private http: Http) {}

    private alumnosUrl = 'http://localhost:9000/resource/alumnos';
    private alumnoUrl = 'http://localhost:9000/resource/alumno';

    findAll () {
        return this.http.get(this.alumnosUrl)
            .map(res => <Alumno[]> res.json())
            .catch(this.handleError);
    }

    findById(id:number) {
        return this.http.get(this.alumnoUrl + '/' + id)
            .map(res => <Alumno> res.json())
            .catch(this.handleError);
    }

    findByNumeroCuenta(numeroCuenta:string) {
        return this.http.get(this.alumnoUrl + '-' + numeroCuenta)
            .map(res => <Alumno> res.json())
            .catch(this.handleError);
    }
    persist(alumno:Alumno) {

        let body = JSON.stringify( alumno );
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.alumnoUrl, body, options)
            .map(res => res.text())
            .catch(this.handleError);
    }

    update(alumno:Alumno) {

        let body = JSON.stringify( alumno );
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.alumnoUrl,body,options)
            .map(res => res.text())
            .catch(this.handleError);
    }

    persistAlumnosFromExcel(file:File) : Promise<any> {

        return new Promise((resolve, reject) => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

                formData.append('file', file, file.name);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.open('POST', this.alumnosUrl, true);
            xhr.send(formData);
        });
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
