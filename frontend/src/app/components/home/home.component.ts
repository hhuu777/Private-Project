import { Component, OnInit } from '@angular/core';
import { Music, MusicService } from '../../services/websocket.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    musics : Music[] = [];

	constructor (private musicService : MusicService) {
		this.musics = this.musicService.getMusics();
    }
    
    allMusicList () {
        this.musics = this.musicService.getMusics();
    }

    koreanMusicList () {
        this.musics = this.musicService.getMusicLocationAlbum('korea');
    }

    abroadMusicList () {
        this.musics = this.musicService.getMusicLocationAlbum('abroad');
    }
}
