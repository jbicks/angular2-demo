import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CourseListComponent} from '../course-list/course-list.component';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {ProfileComponent} from '../profile/profile.component';
import {SessionService} from '../../services/storage/session.service';
import {LocalizationService} from '../../services/localization/localization.service';
import {LanguageModel} from '../../store/models/language.model';
import {Store} from '../../store/store';
import {ItemListComponent} from '../item-list/item-list.component';

@Component({
    selector: "page-skeleton",
    template: `
        <div class="profile-container">
            <a href="#" (click)="logout()" class="btn btn-danger logout">{{_store.terms.Logout}}</a>
            <profile class="profile"></profile>
        </div>
        <ul class="breadcrumb">
            <li class="active">{{_store.terms.Catalog}}</li>
        </ul>
        <div class="content-container">
            <ng-content></ng-content>
        </div>
        <footer>
            <dropdown [items]="languages" [direction]="'up'" (selected)="onLanguageChange($event)"></dropdown>
        </footer>
    `,
    styles: [`
        footer {
            width: 100%;
            background: #f5f5f5;
            position: fixed;
            bottom: 0;
            padding: 8px 15px;
        }
        .profile-container {
            padding: 15px 15px 15px;
            float: right;
            clear: both;
        }
        .profile {
            margin-right: 25px;
            float: right;
        }
        .logout {
            margin-top: 10px;
            float: right;
        }
        .breadcrumb {
            width: 100%;
            float: left;
        }
        .content-container {
            margin-bottom: 60px;
            float: left;
        }
    `],
    directives: [CourseListComponent, DropdownComponent, ProfileComponent, ItemListComponent]
})
export class PageSkeletonComponent implements OnInit {

    languages:string[];

    constructor(private _store: Store,
                private _router: Router,
                private _localizationService:LocalizationService,
                private _storageService:SessionService) {
    }

    ngOnInit() {
        this.languages = this._store.languages.map(language => language.NativeName);
    }

    logout() {
        this._storageService.clear();
        this._router.navigate(["Login"]);
        return false;
    }

    onLanguageChange(index:number) {
        var language = this._store.languages[index];
        this._localizationService.getTerms(language.Id)
          .subscribe(
              success => console.log(language.Name + " translations have been loaded."),
              error => console.log("failed to load translations.")
          );
    }
}
