import {Injectable, Inject} from 'angular2/core';
import {Store} from '../../store/store'

@Injectable()
export class StorageService{
    constructor(private _store:Store){
        
    }
    
    save(){
        localStorage.setItem('mystore',JSON.stringify(this._store));
    }
        
    load(){
        Object.assign(this._store, JSON.parse(localStorage.getItem('mystore')));
    }
    
    clear(){
        localStorage.clear();
    }
}