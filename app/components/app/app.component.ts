import {Component, OnInit} from 'angular2/core';
import {LoginComponent} from '../login/login.component';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CatalogComponent} from '../catalog/catalog.component';
import {LoggedInRouterOutlet} from '../../outlets/logged.in.outlet';
import {StorageService} from '../../services/storage/storage.service';

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
    directives: [LoggedInRouterOutlet],
    providers:[StorageService]
})

export class AppComponent implements OnInit {
    
    constructor(private _storageService:StorageService) {
    }

    ngOnInit() {
        console.log('initializing app')
        
        this._storageService.load();
    }
}
