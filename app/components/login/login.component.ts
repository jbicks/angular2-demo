import {Component} from 'angular2/core';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {LoginService} from '../../services/login/login.service';

@Component({
    selector: "login",
    template: `
      <div class="login">
          <h2 class="form-signin-heading">Please sign in</h2>
          <span *ngIf="validationError" class="validation-error">{{validationError}}</span>
          <input [(ngModel)]="username" [class.error]="validationError" type="text" class="input-block-level" placeholder="Email address">
          <input [(ngModel)]="password" [class.error]="validationError" type="password" class="input-block-level" placeholder="Password">
          <button [class.disabled]="!canSubmit" (click)="submit()" class="btn btn-large btn-primary" type="submit">Sign in</button>
      </div>
      `,
    styles: [`
      .login {
        width: 400px;
        border-radius: 30px;
        background: #f4f4f4;
        padding: 40px;
        margin: 50px auto;
      }
      .validation-error {
        color: #E82C0C;
        margin-top: 20px;
        float: left;
      }
      .form-signin-heading {
        margin: 0;
      }
      .input-block-level {
        padding: 17px 10px;
      }
      .input-block-level:first-of-type {
        margin-top: 15px;
      }
      .input-block-level.error {
        background: #FFE6E5;
        border-color: E82C0C;
      }
      .btn {
        margin-top: 10px;
      }
      .btn.disabled {
        background: #C9C9C9;
      }
    `],
    directives: [DropdownComponent],
    providers: [LoginService]
})
export class LoginComponent {

    username:string;
    password:string;
    validationError:string;// = "Username and/or password in incorrect.";

    get canSubmit () {
      return this.username && this.username.length > 0 && this.password && this.password.length > 0;
    }

    constructor(private loginService: LoginService) {

    }

    submit() {
      
    }
}
