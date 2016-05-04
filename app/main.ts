import {bootstrap}    from 'angular2/platform/browser';
import {provide, OpaqueToken}    from 'angular2/core';
import {AppComponent} from './components/app/app.component';
import {Store} from './store/store'
import {HTTP_SERVICE} from './services/interfaces/http.interface'
import {HttpService} from './services/http/http.service'

bootstrap(AppComponent, [
  Store,
  provide(HTTP_SERVICE, {useClass: HttpService})
]);
