import {CourseStatus} from '../constants/course-status.enum'

export class PreferenceModel {
  catalogStatusFilters:[CourseStatus] = [
    CourseStatus.NotStarted,
    CourseStatus.InProgress,
    CourseStatus.Completed
  ];
}
