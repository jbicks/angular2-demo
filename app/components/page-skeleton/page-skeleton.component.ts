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
        <a href="#" (click)="logout()" class="btn btn-danger pull-right logout">Logout</a>
        <div class="row">
            <div class="span8">
                <ul class="breadcrumb">
                    <li class="active">Catalog</li>
                </ul>
            </div>
            <div class="span4">
                <div class="pull-right">
                    <profile></profile>
                </div>
            </div>
        </div>
        <div>
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
        .logout {
            margin-top: 3px;
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
