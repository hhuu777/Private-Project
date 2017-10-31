import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Music, MusicService } from '../../services/websocket.service';
import { AlbumMusic, AlbumMusicService } from '../../services/album-detail.service';

@Component({
	selector: 'app-artist',
	templateUrl: './artist.component.html',
	styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
	music : Music;
	artistAlbum : Music[] = [];
	artistMusic : AlbumMusic[] = [];

	constructor (route : ActivatedRoute, musicService : MusicService, albumMusicService : AlbumMusicService) {
			let artist = route.snapshot.params['musArtist'];
			this.music = musicService.getMusicArtist(artist);
			this.artistAlbum = musicService.getMusicArtistAlbum(artist);
			this.artistMusic = albumMusicService.getArtistMusic(artist);
	}	
}
