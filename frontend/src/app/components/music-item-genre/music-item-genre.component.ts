import { Component, AfterViewChecked, OnChanges } from '@angular/core';
import { Music, MusicService } from '../../services/websocket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music-item-genre',
  templateUrl: './music-item-genre.component.html',
  styleUrls: ['./music-item-genre.component.css']
})
export class MusicItemGenreComponent implements AfterViewChecked {
    musics : Music[] = [];
    musGenre : string;
    route : ActivatedRoute;
    musicService : MusicService;

    constructor (route : ActivatedRoute, musicService : MusicService) {
        this.route = route;
        this.musicService = musicService;    
    }

    ngAfterViewChecked () {
        this.musGenre = this.route.snapshot.params['musGenre'];
        switch (this.musGenre) {
            case 'ballad': {
                this.musics = this.musicService.getMusicsGenre(this.musGenre);
                break;
            }
            case 'dance': {
                this.musics = this.musicService.getMusicsGenre(this.musGenre);
                break;
            }
            case 'koHiphop': {
                this.musics = this.musicService.getMusicsGenre(this.musGenre);
                break;
            }
            case 'koRnb': {
                this.musics = this.musicService.getMusicsGenre(this.musGenre);
                break;
            }
            case 'koRock': {
                this.musics = this.musicService.getMusicsGenre(this.musGenre);
                break;
            }
            case 'pop': {
                this.musics = this.musicService.getMusicsGenre(this.musGenre);
                break;
            }
            case 'elec': {
                this.musics = this.musicService.getMusicsGenre(this.musGenre);
                break;
            }
            case 'abHiphop': {
                this.musics = this.musicService.getMusicsGenre(this.musGenre);
                break;
            }
            case 'abRnb': {
                this.musics = this.musicService.getMusicsGenre(this.musGenre);
                break;
            }
            case 'abRock': {
                this.musics = this.musicService.getMusicsGenre(this.musGenre);
                break;
            }
        }
    }
}
