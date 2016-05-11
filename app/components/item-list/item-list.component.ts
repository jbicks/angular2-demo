import {Component, OnInit} from 'angular2/core';

@Component({
  selector:'item-list',
  template: `
    <div class="container">
        <ng-content></ng-content>
    </div>
  `,
  styles: [`
      .container {
          border: 1px solid #b4b4b4;
          border-radius: 3px;
          padding: 10px;
      }
  `]
})

export class ItemListComponent {
}
