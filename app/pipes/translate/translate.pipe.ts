import {Pipe, PipeTransform} from 'angular2/core';
import {LocalizationService} from '../../services/localization/localization.service';

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {

    constructor(private _localizationService:LocalizationService) {
    }

    transform(value: string, ...args: string[]) {
        if (value) {
            return this._localizationService.translate(value, args);
        }
        return null;
    }

}
