import {HttpResponse} from '../http/http-response'
import {OpaqueToken} from 'angular2/core'

export const HTTP_SERVICE = new OpaqueToken('IHttpService');

export interface IHttpService {
    get<TContent>(url: string): HttpResponse<TContent>;
    post<TContent>(url: string, payload: any): HttpResponse<TContent>;
}
