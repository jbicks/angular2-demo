import {Injectable} from 'angular2/core';
import {User} from './user'

@Injectable()
export class Store {
  user:User;
}
