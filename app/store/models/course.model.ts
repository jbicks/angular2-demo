import {ActiveStatus} from '../constants/active-status.enum'

export class CourseModel {
  Id: string;
  Name: string;
  Description: string;
  ActiveStatus: ActiveStatus;
  thumbnailUrl: string;
}
