import {Injectable} from 'angular2/core';
import {UserModel} from './models/user.model'
import {CatalogModel} from './models/catalog.model'
import {LanguageModel} from './models/language.model'

@Injectable()
export class Store {
  token: string;
  user:UserModel;
  catalog:CatalogModel;
  languages:LanguageModel[];
}
