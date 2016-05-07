import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {AppComponent} from './components/app/app.component';
import {Store} from './store/store'
import {HttpDefaults} from './services/constants/http-defaults'

bootstrap(AppComponent, [Store, HttpDefaults, HTTP_PROVIDERS]);
