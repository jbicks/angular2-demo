import {Component, Input} from 'angular2/core';
import {CourseModel} from '../../store/models/course.model'
import {ActiveStatus} from '../../store/constants/active-status.enum'

@Component({
    selector: "course-item",
    template: `
        <div class="media">
            <a class="pull-left">
                <img class="media-object" src="http://lorempixel.com/64/64/business?id={{course.Id}}">
            </a>
            <div class="media-body">
                <span [class.active]="isActive" class="status"></span>
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
        .status {
            width: 20px;
            height: 20px;
            background: red;
            border-radius: 10px;
            float: right;
        }
        .active {
            background: green;
        }
  `],
})
export class CourseItemComponent {

    @Input()
    course: CourseModel;

    get isActive ():boolean {
        return this.course.ActiveStatus == ActiveStatus.Active;
    }
}
