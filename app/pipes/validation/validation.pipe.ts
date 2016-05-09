import {Pipe, PipeTransform} from 'angular2/core'



@Pipe({
    name: 'validation'
})
export class ValidationPipe implements PipeTransform {

    static REQUIRED:string = 'Required.';
    static INVALID_CREDENTIALS:string = 'Incorrect username and/or password.';

    transform(value: any, args: any[]) {
        if (value) {
            if (value.required) {
                return ValidationPipe.REQUIRED;
            }
            if (value.invalidCredentials) {
                return ValidationPipe.INVALID_CREDENTIALS;
            }
        }
        return null;
    }

}
