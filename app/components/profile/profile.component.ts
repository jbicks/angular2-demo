import {Component} from 'angular2/core';
import {Store} from '../../store/store'
import {TranslatePipe} from '../../pipes/translate/translate.pipe';

@Component({
    selector: "profile",
    pipes: [TranslatePipe],
    template: `
        <div>
            <img src="http://lorempixel.com/50/50/people" class="img-circle">
            {{ 'LoggedInAs' | translate:firstName:lastName }}
        </div>
    `
})
export class ProfileComponent {

    firstName:string;
    lastName:string;

    constructor(private _store:Store) {
        this.firstName = _store.user.FirstName;
        this.lastName = _store.user.LastName;
    }
}
