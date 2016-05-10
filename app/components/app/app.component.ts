import {Component, OnInit} from 'angular2/core';
import {LoginComponent} from '../login/login.component';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CatalogComponent} from '../catalog/catalog.component';
import {LoggedInRouterOutlet} from '../../outlets/logged.in.outlet';
import {SessionService} from '../../services/storage/session.service';

@RouteConfig([
    { path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true },
    { path: '/catalog', name: 'Catalog', component: CatalogComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Login'] }
])

@Component({
  selector: 'app',
  template: `
         <router-outlet></router-outlet>
    `,
    directives: [LoggedInRouterOutlet],
    providers:[SessionService]
})

export class AppComponent implements OnInit {
    
    constructor(private _storageService:SessionService) {
    }

    ngOnInit() {
        console.log('initializing app')
        
        this._storageService.load();
    }
}
