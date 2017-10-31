import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { components } from './componentList';
import { MusicDetailComponent } from './components/music-detail/music-detail.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './components/application/application.component';
import { Top100Component } from './components/top100/top100.component';
import { RecommendComponent } from './components/recommend/recommend.component';
import { ArtistComponent } from './components/artist/artist.component';
import { MusicItemChartComponent } from './components/music-item-chart/music-item-chart.component';
import { GenreComponent } from './components/genre/genre.component';
import { MusicItemGenreComponent } from './components/music-item-genre/music-item-genre.component';

import { MusicService} from './services/websocket.service';
import { AlbumMusicService } from './services/album-detail.service';
import { AlbumService } from './services/album.service';

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent },
      { path : 'album/:musId', component : MusicDetailComponent },
      { path : 'top100', component : Top100Component },
      { path : 'recommend', component : RecommendComponent },
      { path : 'artist/:musArtist', component : ArtistComponent },
      { path : 'genre', component : GenreComponent,
        children : [
          { path : 'detail/:musGenre', component : MusicItemGenreComponent }      
        ]
      }
    ])
  ],
  providers: [MusicService, AlbumMusicService, AlbumService,
              { provide : LocationStrategy, useClass : HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
