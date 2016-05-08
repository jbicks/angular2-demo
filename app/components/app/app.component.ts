import {Component} from 'angular2/core';
import {LoginComponent} from '../login/login.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CatalogComponent} from '../catalog/catalog.component';

@RouteConfig([
     {path:'/login', name:'Login', component: LoginComponent, useAsDefault:true},
     {path:'/catalog', name: 'Catalog', component: CatalogComponent},
     {path: '/*other', name: 'Other', redirectTo:  ['Login']}
])

@Component({
  selector: 'app',
  template: `
      <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  constructor(){
    console.log('in app comp constructor')
  }
}
