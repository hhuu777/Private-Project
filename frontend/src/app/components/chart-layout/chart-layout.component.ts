import { Component, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chart-layout',
  templateUrl: './chart-layout.component.html',
  styleUrls: ['./chart-layout.component.css']
})
export class ChartLayoutComponent {
    isChecked : boolean = false;
    @Input() albumArt : boolean;
    @ViewChild('allCheck')allCheck : ElementRef;
    @Output() check : EventEmitter<boolean> = new EventEmitter();

    allChecked() {
        this.isChecked = !this.isChecked;
        this.allCheck.nativeElement.checked = this.isChecked;
        this.check.emit(this.isChecked);
    }
}
