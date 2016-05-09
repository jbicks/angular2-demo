import {Injectable} from 'angular2/core';
import {Http, Response, RequestOptionsArgs, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Environment} from '../constants/environment';
import {CourseModel} from '../../store/models/course.model';
import {HttpDefaults} from '../constants/http-defaults';

@Injectable()
export class CatalogService {
    
    constructor(private _http:Http, private _httpDefaults: HttpDefaults){
        
    }

    getCourses():Observable<CourseModel[]>{
        var url = Environment.baseUrl + Environment.endpoints.getCourses;
        
        return this._http.get(url, this._httpDefaults.requestOptionsArgs)
            .map(response => response.json());
    }
}
