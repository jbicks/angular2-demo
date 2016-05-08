import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {AppComponent} from './components/app/app.component';
import {Store} from './store/store'
import {HttpDefaults} from './services/constants/http-defaults'
import {ROUTER_BINDINGS} from 'angular2/router'


bootstrap(AppComponent, [Store, HttpDefaults, HTTP_PROVIDERS, ROUTER_BINDINGS]);
