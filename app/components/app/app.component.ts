import {Component, OnInit} from 'angular2/core';
import {LoginComponent} from '../login/login.component';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CatalogComponent} from '../catalog/catalog.component';
import {LoggedInRouterOutlet} from '../../outlets/logged.in.outlet';
import {StorageService} from '../../services/storage/storage.service';
import {UserService} from '../../services/user/user.service';

@RouteConfig([
    { path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true },
    { path: '/catalog', name: 'Catalog', component: CatalogComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Login'] }
])

@Component({
  selector: 'app',
  template: `
    <h1>Absorb 6</h1>
    
   <ul class="breadcrumb">
        <li *ngIf="!_userService.isLoggedIn()" class="active">Login</li>
        <li *ngIf="_userService.isLoggedIn()" class="active">Catalog</li>
    </ul>
        
    <span (click)="logout()" *ngIf="_userService.isLoggedIn()">Logout</span>
    <router-outlet></router-outlet>
    `,
    directives: [LoggedInRouterOutlet],
    providers:[StorageService,UserService]
})

export class AppComponent implements OnInit {
    
    constructor(private _router: Router, 
                private _storageService:StorageService,
                private _userService: UserService) {
    }

    ngOnInit() {
        console.log('initializing app')
        
        this._storageService.load();
    }
    
    logout(){
        this._storageService.clear();
        this._router.navigate(["Login"]);
        
    }
}
