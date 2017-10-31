import { Component, OnInit, Input } from '@angular/core';
import { Music } from '../../services/websocket.service';

@Component({
    selector: 'app-music-item',
    templateUrl: './music-item.component.html',
    styleUrls: ['./music-item.component.css']
})
export class MusicItemComponent {
    @Input() music : Music;
}
