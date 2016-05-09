import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CourseListComponent} from '../course-list/course-list.component';
import {FilterSelectorComponent} from '../filter-selector/filter-selector.component';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {ProfileComponent} from '../profile/profile.component';
import {StorageService} from '../../services/storage/storage.service';
import {LanguageModel} from '../../store/models/language.model';
import {Store} from '../../store/store';

@Component({
    selector: "catalog",
    template: `
        <ul class="breadcrumb">
            <li class="active">Catalog</li>
        </ul>
        <a (click)="logout()">Logout</a>
        <profile></profile>
        <div>catalog component placeholder</div>
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
    `],
    directives: [CourseListComponent, FilterSelectorComponent, DropdownComponent, ProfileComponent]
})
export class CatalogComponent implements OnInit {

    languages:string[];

    constructor(private _store: Store,
                private _router: Router,
                private _storageService:StorageService) {


    }

    ngOnInit() {
        this.languages = this._store.languages.map(language => language.NativeName);
    }

    logout() {
        this._storageService.clear();
        this._router.navigate(["Login"]);
    }

    onLanguageChange(index:number) {
        var languageId = this._store.languages[index].Id;
        console.log(languageId);
    }
}
