import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: "dropdown",
  templateUrl: 'app/components/dropdown/dropdown.template.html'
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
