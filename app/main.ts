import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {AppComponent} from './components/app/app.component';
import {Store} from './store/store'

bootstrap(AppComponent, [Store, HTTP_PROVIDERS]);
