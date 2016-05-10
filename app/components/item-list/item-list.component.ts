import {Component, OnInit} from 'angular2/core';

@Component({
  selector:'item-list',
  template: `
    <div>
        <ng-content></ng-content>
    </div>
  `
})

export class ItemListComponent {
}
