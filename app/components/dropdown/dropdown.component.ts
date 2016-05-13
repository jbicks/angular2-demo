import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: "dropdown",
  templateUrl: 'app/components/dropdown/dropdown.template.html',
  styles:[`
    div{
        padding-bottom:10px;
    }
  `]
})
export class DropdownComponent {

    @Input()
    items:string[];

    @Input()
    direction:string = 'down';

    @Input("selected-index")
    selectedIndex:number = 0;

    @Output('selected')
    selectionChanged:EventEmitter<number> = new EventEmitter<number>();

    select(index:number) {
        if (index != this.selectedIndex)
        {
            this.selectedIndex = index;
            this.selectionChanged.emit(index);
        }
        this.isOpen = false;
        return false;
    }

    isOpen:boolean;
}
