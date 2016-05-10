import {Component, OnInit} from 'angular2/core';
import {CourseItemComponent} from '../course-item/course-item.component';
import {CatalogService} from '../../services/catalog/catalog.service';
import {CourseModel} from '../../store/models/course.model';
import {ActiveStatus} from '../../store/constants/active-status.enum';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {ItemListComponent} from '../item-list/item-list.component';

@Component({
  selector:'course-list',
  template: `
    <dropdown [items]="_statuses" (selected)="onStatusChanged($event)" (select)="2"></dropdown>
    <item-list>
      <course-item *ngFor="var course of _filteredCourses" [course]="course"></course-item>
    </item-list>
  `,
  directives: [CourseItemComponent, DropdownComponent, ItemListComponent],
  providers:[CatalogService]
})

export class CourseListComponent  implements OnInit {
  
  private _courses:CourseModel[];
  private _filteredCourses:CourseModel[];
  private _statuses:string[] = ['All'];
  
  constructor(private _catalogService: CatalogService){
    console.log('in constructor')
  }
  
  ngOnInit(){
    Object.keys(ActiveStatus)
      .filter(v => Number.isInteger(+v))
      .forEach(v => this._statuses.push(ActiveStatus[v]));
   
    this._catalogService
      .getCourses()
      .subscribe(courses=>{
        this._courses = courses;
        this._filteredCourses = this._courses;
      });
  }

  onStatusChanged(status:number){
    if(status == 0){
      this._filteredCourses = this._courses;
    }
    else {
      this._filteredCourses = this._courses.filter(course=>course.ActiveStatus == (status -1));
    }
    console.log('updated status to ' + status);
  }
}
