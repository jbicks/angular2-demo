import {Component, Input} from 'angular2/core';
import {CourseModel} from '../../store/models/course.model'

@Component({
  selector: "course-item",
  template: `
    <div class="media">
        <a class="pull-left">
          <img class="media-object" src="http://lorempixel.com/64/64/business?id={{course.Id}}">
        </a>
        <div class="media-body">
          <h4 class="media-heading">{{course.Name}}</h4>
          {{course.Description}}
        </div>
      </div>`,
   styles:[`
    .media:first-child {
        margin-top: 15px;
    }
  `],
})
export class CourseItemComponent {

    @Input()
    course:CourseModel;
}
