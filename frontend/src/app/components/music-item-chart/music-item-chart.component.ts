import { Component, Input, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { Music } from '../../services/websocket.service';

@Component({
  selector: 'app-music-item-chart',
  templateUrl: './music-item-chart.component.html',
  styleUrls: ['./music-item-chart.component.css']
})
export class MusicItemChartComponent implements OnChanges {
    @Input() music : Music;
    @Input() allCheck : boolean;
    
    @ViewChild('check')check : ElementRef;

    ngOnChanges() {
        if(this.allCheck) {
            this.check.nativeElement.checked = true;
        } else {
            this.check.nativeElement.checked = false;
        }
    }
}
