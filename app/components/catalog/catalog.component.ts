import {Component} from 'angular2/core';
import {CourseListComponent} from '../course-list/course-list.component';
import {FilterSelectorComponent} from '../filter-selector/filter-selector.component';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {ProfileComponent} from '../profile/profile.component';

@Component({
    selector: "catalog",
    template: `
        <ul class="breadcrumb">
            <li class="active">Catalog</li>
        </ul>
        <a (click)="logout()">Logout</a>
        <profile></profile>
        <div>catalog component placeholder</div>
        `,
    directives: [CourseListComponent, FilterSelectorComponent, DropdownComponent, ProfileComponent]
})
export class CatalogComponent {
    logout(){
            this._storageService.clear();
            this._router.navigate(["Login"]);
            
    }
}
