import {CourseStatus} from '../enums/course-status.enum'

export class CourseModel {
  id: string;
  title: string;
  description: string;
  status: CourseStatus;
  thumbnailUrl: string;
}
