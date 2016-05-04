import {Component} from 'angular2/core';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {LoginService} from '../../services/login/login.service';

@Component({
  selector: "login",
  template: `<div>login component placeholder</div>`,
  directives: [DropdownComponent],
  providers: [LoginService]
})
export class LoginComponent {
    constructor(private loginService:LoginService){

    }
}
