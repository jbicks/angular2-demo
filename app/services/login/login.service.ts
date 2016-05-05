import {Injectable, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http'
// import {HTTP_SERVICE, IHttpService} from '../interfaces/http.interface'
import {Observable} from 'rxjs/Rx'
import {HttpResponse} from '../http/http-response'
import {UserModel} from '../../store/models/user.model'
import {Environment} from '../http/environment'

@Injectable()
export class LoginService {

    constructor(private http: Http) {
      
    }

    authenticate(username: string, password: string) {
        var url = `${this.baseUrl}${this.authenticateUrl}?username=${username}&password=${password}&privateKey=${this.apiKey}`;
        return this.http.post(url, null)
            .map(response => response.text().replace('\"', ''))
            .catch(this.handleError);
    }

    private handleError(error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
