import { Component, OnInit, Input } from '@angular/core';
import { Music, MusicService } from '../../services/websocket.service';

@Component({
    selector: 'app-top100',
    templateUrl: './top100.component.html',
    styleUrls: ['./top100.component.css']
})
export class Top100Component {
    musics : Music[] = [];
    allCheck : boolean;

	constructor (private musicService : MusicService) {
        this.musics = this.musicService.getMusics();
    }

    allChecked(event : boolean) {
        this.allCheck = event;
    }
}
