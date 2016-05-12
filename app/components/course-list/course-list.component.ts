import {Component, OnInit} from 'angular2/core';
import {CourseItemComponent} from '../course-item/course-item.component';
import {CatalogService} from '../../services/catalog/catalog.service';
import {CourseModel} from '../../store/models/course.model';
import {ActiveStatus} from '../../store/constants/active-status.enum';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {ItemListComponent} from '../item-list/item-list.component';
import {Store} from '../../store/store';

@Component({
    selector: 'course-list',
    template: `
        <dropdown [items]="_statuses" (selected)="onStatusChanged($event)" (select)="2"></dropdown>
        <item-list>
            <course-item *ngFor="var course of _filteredCourses" [course]="course"></course-item>
        </item-list>
    `,
    styles: [`
        dropdown {
            margin-bottom: 15px;
            float: left;
        }
        item-list {
            float: left;
        }
    `],
    directives: [CourseItemComponent, DropdownComponent, ItemListComponent],
    providers: [CatalogService]
})

export class CourseListComponent implements OnInit {

    private _courses: CourseModel[];
    private _filteredCourses: CourseModel[];
    private _statuses: string[];

    constructor(private _store: Store, private _catalogService: CatalogService) {
    }

    ngOnInit() {
        this.getCourses();
        this.addFilters();
    }

    getCourses() {
        this._catalogService
            .getCourses()
            .subscribe(courses => {
                this._courses = courses;
                this._filteredCourses = this._courses;
            });
    }

    addFilters() {
        this._statuses = ['All', ...Object.keys(ActiveStatus)
            .filter(v => Number.isInteger(+v))
            .map(v => ActiveStatus[v])];
    }

    onStatusChanged(status: number) {
        this._filteredCourses = status != 0
            ? this._courses.filter(course => course.ActiveStatus == (status - 1))
            : this._courses;
    }
}
