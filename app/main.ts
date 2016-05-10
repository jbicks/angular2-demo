import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {ROUTER_BINDINGS} from 'angular2/router';
import {AppComponent} from './components/app/app.component';
import {HttpDefaults} from './services/constants/http-defaults';
import {LocalizationService} from './services/localization/localization.service';
import {Store} from './store/store';

bootstrap(AppComponent, [Store, LocalizationService, HttpDefaults, HTTP_PROVIDERS, ROUTER_BINDINGS]);
