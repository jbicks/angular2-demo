import {CourseStatus} from '../constants/course-status.enum'

export class CourseModel {
  Id: string;
  Name: string;
  Description: string;
  ActiveStatus: CourseStatus;
  thumbnailUrl: string;
}
