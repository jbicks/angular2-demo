import {Component, OnInit} from 'angular2/core';

@Component({
  selector:'item-list',
  template: `
    <div style="container">
        <ng-content></ng-content>
    </div>
  `,
  styles: [`
      .container {
          width: 400px;
          height: 300px;
          border: 1px solid red;
      }
  `]
})

export class ItemListComponent {
}
