import {Component} from 'angular2/core';
import {Store} from '../../store/store'
import {MapPipe} from '../../pipes/map/map.pipe';

@Component({
    selector: "profile",
    pipes: [MapPipe],
    template: `
        <div>
            <img src="http://lorempixel.com/50/50/people" class="img-circle">
            {{ _store.terms.LoggedInAs | map:_store.user.FirstName:_store.user.LastName }}
        </div>
    `
})
export class ProfileComponent {
    constructor(private _store:Store) {
    }
}
