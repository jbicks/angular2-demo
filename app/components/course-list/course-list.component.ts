import {Component} from 'angular2/core';
import {CourseItemComponent} from '../course-item/course-item.component'

@Component({
  template: `<div>course list component placeholder</div>`,
  directives: [CourseItemComponent]
})
export class CourseListComponent {
  constructor(){
    console.log('in constructor')
  }
}
