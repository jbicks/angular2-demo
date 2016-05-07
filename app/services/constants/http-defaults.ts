import {Headers, RequestOptionsArgs} from 'angular2/http'

export class HttpDefaults {
    requestOptionsArgs: RequestOptionsArgs = {
        headers: new Headers()
    }
}
