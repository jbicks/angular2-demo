import {Injectable} from 'angular2/core';
import {IHttpService} from '../interfaces/http.interface'
import {HttpResponse} from './http-response';

@Injectable()
export class HttpService implements IHttpService {

    get<TContent>(url: string): HttpResponse<TContent> {
        return new HttpResponse<TContent>();
    }

    post<TContent>(url: string, payload: any): HttpResponse<TContent> {
        return new HttpResponse<TContent>();
    }

}
