import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'map'
})
export class MapPipe implements PipeTransform {
    transform(value: string, ...args: string[]) {
        if (value) {
            if (args) {
                for (var i: number = 1; i <= args.length; i++) {
                    value = value.replace('{' + i + '}', args[i - 1]);
                }
            }
            return value;
        }
        return null;
    }

}
