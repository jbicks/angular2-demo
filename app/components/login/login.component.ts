import {Component, OnInit} from 'angular2/core'
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common'
import {Http, Response, RequestOptionsArgs, Headers} from 'angular2/http'
import {Observable} from 'rxjs/Rx'
import {LocalizationService} from '../../services/localization/localization.service'
import {UserService} from '../../services/user/user.service'
import {ValidationPipe} from '../../pipes/validation/validation.pipe'
import {SessionService} from '../../services/storage/session.service'


@Component({
    selector: "login",
    providers: [UserService, SessionService],
    pipes: [ValidationPipe],
    templateUrl: 'app/components/login/login.template.html',
    styleUrls: ['app/components/login/login.styles.css']
})
export class LoginComponent {

    form: ControlGroup;

    constructor(
        private _userService: UserService,
        private _localizationService: LocalizationService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _storageService: SessionService) {

        this.form = _formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        },
        {
            validator: (ctrl: ControlGroup) => {
                ctrl.setErrors({});
                return null;
            }
        });
    }

    submit(event) {
        var { username } = this.form.value;
        var { password } = this.form.value;
        
        var onSuccessfulLogin = ()=>{
            this._storageService.save();
            this._router.navigate(['Catalog']);
        }
    
        this._userService
            .authenticate(username, password)
            .subscribe(
                success => onSuccessfulLogin(),
                error => this.formError({ invalidCredentials: true })
            );
    }
    
    getUserDetails() {
        return Observable.forkJoin(
            this._userService.getDetails(),
            this._localizationService.getLanguages(),
            this._localizationService.getTerms(1)
        );
    }    
    
    formError(error:any) {
        var controls = this.form.controls;
        for (let control in controls) {
            var ctrl = controls[control] as Control;
            ctrl.updateValue('');
        }
        this.form.setErrors(error);
    }
}
