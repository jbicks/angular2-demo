import {Component} from 'angular2/core';
import {CourseListComponent} from '../course-list/course-list.component';
import {PageSkeletonComponent} from '../page-skeleton/page-skeleton.component';

@Component({
    selector: "catalog",
    template: `
        <page-skeleton>
            <course-list></course-list>
        </page-skeleton>
        `,
    directives: [CourseListComponent, PageSkeletonComponent]
})
export class CatalogComponent  {
}
