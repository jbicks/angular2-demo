import {Component} from 'angular2/core';
import {Store} from '../../store/store'

@Component({
    selector: "profile",
    template: `<div>Name: {{Name}}</div>`
})
export class ProfileComponent {
    Name:string;
    constructor(private _store:Store) {
        this.Name = _store.user.FirstName
    }
}
