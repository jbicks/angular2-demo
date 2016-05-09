import {Component, Input} from 'angular2/core';
import {CourseModel} from '../../store/models/course.model'

@Component({
  selector: "course-item",
  template: `<div class="container">
      <span>{{course.Name}}<span>
  </div>`,
  styles: [`
      .container {
          border: 1px solid blue;
      }
  `]
})
export class CourseItemComponent {

    @Input()
    course:CourseModel;
}
