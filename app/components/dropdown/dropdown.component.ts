import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: "dropdown",
  template: `
      <div  [class.open]="open" [class.dropdown]="direction=='down'" [class.dropup]="direction=='up'">
          <button (click)="open = !open" (blur)="open=false"
              class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  {{items[selectedIndex]}}
                  <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li *ngFor="#item of items; #i = index" class="dropup-item"><a href=# (mousedown)="select(i)">{{item}}</a></li>
          </ul>
      </div>
  `
})
export class DropdownComponent {

    @Input()
    items:string[];

    @Input()
    direction:string = 'down';

    @Output("selected-index")
    selectedIndex:number = 0;

    @Output('selected')
    selectionChanged:EventEmitter<number> = new EventEmitter<number>();

    @Input()
    select(index:number) {
        if (index != this.selectedIndex)
        {
            this.selectedIndex = index;
            this.selectionChanged.emit(index);
        }
        this.open = false;
        return false;
    }

    open:boolean;
}
