import {ActiveStatus} from '../constants/active-status.enum'

export class UserModel {
    Id:string;
    DepartmentId:string;
    FirstName:string;
    MiddleName:string;
    LastName:string;
    Username:string;
    EmailAddress:string;
    LanguageId:number;
    JobTitle:string;
    ActiveStatus:ActiveStatus;
}
