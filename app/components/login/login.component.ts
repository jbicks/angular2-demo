import {Component} from 'angular2/core';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {LoginService} from '../../services/login/login.service';
import {ValidationPipe} from '../../pipes/validation.pipe';

@Component({
    selector: "login",
    directives: [DropdownComponent],
    providers: [LoginService],
    pipes: [ValidationPipe],
    templateUrl: 'app/components/login/login.template.html',
    styleUrls: ['app/components/login/login.styles.css']
})
export class LoginComponent {

    form:ControlGroup;

    constructor(private loginService: LoginService, private formBuilder:FormBuilder) {
      this.form = formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      })
    }

    submit(event) {
        var { username } = this.form.value;
        var { password } = this.form.value;

        this.loginService.authenticate(username, password)
            .subscribe(response => {
                console.log(response);
            });
    }
}
