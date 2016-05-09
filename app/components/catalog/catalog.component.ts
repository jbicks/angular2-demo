import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CourseListComponent} from '../course-list/course-list.component';
import {FilterSelectorComponent} from '../filter-selector/filter-selector.component';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {ProfileComponent} from '../profile/profile.component';
import {StorageService} from '../../services/storage/storage.service';

@Component({
    selector: "catalog",
    template: `
        <a (click)="logout()" class="pull-right logout-link">Logout</a>
        <div class="row">
            <div class="span8">
                <ul class="breadcrumb">
                    <li class="active">Catalog</li>
                </ul>
            </div>
            <div class="span4">
                <div class="pull-right">
                    <profile></profile>
                </div>
            </div>
        </div>
        <div>
            <course-list></course-list>
        </div>
        `,
    styles:[`
        .logout-link{
            cursor:pointer;
        }
    `],
    directives: [CourseListComponent, FilterSelectorComponent, DropdownComponent, ProfileComponent]
})
export class CatalogComponent {
    constructor(private _router: Router, 
                private _storageService:StorageService){
                    
                }
                
    logout(){
            this._storageService.clear();
            this._router.navigate(["Login"]);
            
    }
}
