import {Injectable, Inject} from 'angular2/core';
import {Http, Response, RequestOptionsArgs, Headers} from 'angular2/http'
import {Observable} from 'rxjs/Rx'
import {UserModel} from '../../store/models/user.model'
import {Store} from '../../store/store'
import {Environment} from '../constants/environment'
import {HttpDefaults} from '../constants/http-defaults'

@Injectable()
export class UserService {

    constructor(private _store:Store, private _http: Http, private _httpDefaults: HttpDefaults) {
    }

    authenticate(username: string, password: string): Observable<void> {
        var url = Environment.baseUrl + Environment.endpoints.authenticate;
        url = url.replace('{USERNAME}', username);
        url = url.replace('{PASSWORD}', password);
        url = url.replace('{PRIVATE_KEY}', Environment.apiKey);

        return this._http.post(url, null)
            .map(response => {
                var token = response.text().replace(/"/g, ''); // the token is returned wrapped in quotes
                this._store.token = token;
                this._httpDefaults.requestOptionsArgs.headers.set('Authorization', token);
            })
            .catch(this.handleError);
    }

    getDetails():Observable<boolean> {
        var url = Environment.baseUrl + Environment.endpoints.userDetails;
        
        return this._http.get(url, this._httpDefaults.requestOptionsArgs)
            .map(response => {
                this._store.user = response.json();
                return true;
            })
            .catch(this.handleError);
    }
    
    isLoggedIn(){
        return (this._store && this._store.token) ? true : false;
    }
    
    private handleError(error: any) {
        let errMsg = error.message || 'Server error';
        return Observable.throw(errMsg);
    }
    
    
}
