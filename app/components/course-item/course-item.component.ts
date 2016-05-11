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
        </div>
    `,
    styles: [`
        .media {
            background: #f2f2f2;
            margin-bottom: 10px;
            padding: 10px;
        }
        .media-object {
            width: 64px;
            height: 64px;
            border: 1px solid #b2b2b2;
            border-radius: 3px;
        }
  `],
})
export class CourseItemComponent {

    @Input()
    course: CourseModel;
}
