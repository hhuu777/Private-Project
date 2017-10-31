import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Music, MusicService } from '../../services/websocket.service';
import { AlbumVO, AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent {
	music : Music;
	musicId : number;
	album : AlbumVO;

	constructor (route : ActivatedRoute, musicService : MusicService, albumService : AlbumService) {
		this.musicId = parseInt(route.snapshot.params['musId']);
		albumService.getAlbumById().subscribe(
			data => this.album = data
		);
		this.music = musicService.getMusicAlbum(this.musicId);
	}		
}
