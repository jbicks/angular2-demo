import {Component, OnInit} from 'angular2/core';
import {CourseItemComponent} from '../course-item/course-item.component';
import {CatalogService} from '../../services/catalog/catalog.service';
import {CourseModel} from '../../store/models/course.model';
import {ActiveStatus} from '../../store/constants/active-status.enum';
import {DropdownComponent} from '../dropdown/dropdown.component';

@Component({
  selector:'course-list',
  template: `
    <dropdown [items]="_statuses" (selected)="onStatusChanged($event)" (select)="2"></dropdown>
    
    <div class="media" *ngFor="#course of _filteredCourses">
      <a class="pull-left">
        <img class="media-object" src="http://lorempixel.com/64/64/business?id={{course.Id}}">
      </a>
      <div class="media-body">
        <h4 class="media-heading">{{course.Name}}</h4>
        {{course.Description}}
      </div>
    </div>
  `,
  directives: [CourseItemComponent, DropdownComponent],
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
    else{
      this._filteredCourses = this._courses.filter(course=>course.ActiveStatus == (status -1));
    }
    console.log('updated status to ' + status);
  }
}
