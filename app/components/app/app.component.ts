import {Component, OnInit} from 'angular2/core';
import {LoginComponent} from '../login/login.component';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CatalogComponent} from '../catalog/catalog.component';

@RouteConfig([
    { path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true },
    { path: '/catalog', name: 'Catalog', component: CatalogComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Login'] }
])

@Component({
  selector: 'app',
  template: `
    <h1>Absorb 6</h1>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {
    constructor(private _router: Router) {
        console.log('in app comp constructor')
    }

    ngOnInit() {
        // this seems to be necessary because the development environment
        // caches the last known route, so never restarts at the default
        this._router.navigate(['Login']);
    }
}
