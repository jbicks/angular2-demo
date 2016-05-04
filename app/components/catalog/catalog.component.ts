import {Component} from 'angular2/core';
import {CourseListComponent} from '../course-list/course-list.component';
import {FilterSelectorComponent} from '../filter-selector/filter-selector.component';
import {DropdownComponent} from '../dropdown/dropdown.component';

@Component({
    selector: "catalog",
    template: `<div>catalog component placeholder</div>`,
    directives: [CourseListComponent, FilterSelectorComponent, DropdownComponent]
})
export class CatalogComponent {

}
