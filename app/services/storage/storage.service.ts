import {Injectable, Inject} from 'angular2/core';
import {Store} from '../../store/store';
import {HttpDefaults} from '../constants/http-defaults';

@Injectable()
export class StorageService{
    constructor(private _store:Store, private _httpDefaults: HttpDefaults){
        
    }
    
    save(){
        localStorage.setItem('mystore',JSON.stringify(this._store));
    }
        
    load(){
        Object.assign(this._store, JSON.parse(localStorage.getItem('mystore')));
        if(this._store && this._store.token){
            this._httpDefaults.requestOptionsArgs.headers.set('Authorization', this._store.token);           
        }
    }
    
    clear(){
        localStorage.clear();
    }
}