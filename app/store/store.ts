import {Injectable} from 'angular2/core';
import {UserModel} from './models/user.model'
import {CatalogModel} from './models/catalog.model'

@Injectable()
export class Store {
  user:UserModel;
  catalog:CatalogModel;
}
