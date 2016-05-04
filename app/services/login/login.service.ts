import {Injectable, Inject} from 'angular2/core';
import {HTTP_SERVICE, IHttpService} from '../interfaces/http.interface'

@Injectable()
export class LoginService {

  constructor(@Inject(HTTP_SERVICE) private httpService:IHttpService) {
  }

  authenticate(username:string, password:string) {

  }

}
