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
            if (value.incorrectCredentials) {
                return "Incorrect username and/or password.";
            }
        }
        return null;
    }

}
