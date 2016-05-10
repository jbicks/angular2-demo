import {Injectable, Inject} from 'angular2/core';
import {Http, Response, RequestOptionsArgs, Headers} from 'angular2/http'
import {Observable} from 'rxjs/Rx'
import {Environment} from '../constants/environment'
import {HttpDefaults} from '../constants/http-defaults'
import {Store} from '../../store/store'

@Injectable()
export class LocalizationService {

    constructor(private _store: Store, private _http: Http, private _httpDefaults: HttpDefaults) {
    }

    getLanguages(): Observable<boolean> {
        var url = Environment.baseUrl + Environment.endpoints.getLanguages;
        return this._http.get(url, this._httpDefaults.requestOptionsArgs)
            .map(response => {
                var languages = response.json();
                this._store.languages = languages;
                return true;
            })
            .catch(this.handleError);
    }

    getTerms(languageId:number):Observable<boolean> {
      var url = Environment.baseUrl + Environment.endpoints.getTerms;
      url = url.replace('{LANGUAGE_ID}', String(languageId));

      return this._http.get(url, this._httpDefaults.requestOptionsArgs)
          .map(response => {
              var terms = response.json();
              this._store.terms = terms;
              return true;
          })
          .catch(this.handleError);
    }

    translate(termKey:string, mappings: string[] = null):string {
        if(!this._store.terms)
            return;
            
        var term = this._store.terms.find(t => t.Key == termKey);
        
        if(!term)
            return;
        
        var value = term.Value;
        
        if (mappings) {
            for (var i:number = 1; i <= mappings.length; i++) {
                value = value.replace('{' + i + '}', mappings[i - 1]);
            }
        }
        return value;
    }

    private handleError(error: any) {
        let errMsg = error.message || 'Server error';
        return Observable.throw(errMsg);
    }
}
