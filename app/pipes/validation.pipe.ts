import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
    name: 'validation'
})
export class ValidationPipe implements PipeTransform {

    transform(value: any, args: any[]) {
        if (value) {
            if (value.required) {
                return "Required.";
            }
            if (value.invalidCredentials) {
                return "Incorrect username and/or password.";
            }
            if (value.userDetailsFailure) {
                return "Failed to load user details.";
            }
        }
        return null;
    }

}
