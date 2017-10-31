import { AppComponent } from './components/application/application.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MusicItemComponent } from './components/music-item/music-item.component';
import { MusicDetailComponent } from './components/music-detail/music-detail.component';
import { MusicService } from './services/websocket.service';
import { StarsComponent } from './components/stars/stars.component';
import { Top100Component } from './components/top100/top100.component';
import { RecommendComponent } from './components/recommend/recommend.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';
import { MusicItemChartComponent } from './components/music-item-chart/music-item-chart.component';
import { GenreComponent } from './components/genre/genre.component';
import { MusicItemGenreComponent } from './components/music-item-genre/music-item-genre.component';
import { ChartLayoutComponent } from './components/chart-layout/chart-layout.component';
import { ChartAlbumLayoutComponent } from './components/chart-album-layout/chart-album-layout.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';

export const components = [AppComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    MusicItemComponent,
    MusicDetailComponent,
    StarsComponent,
    Top100Component,
    RecommendComponent,
    NavbarComponent,
    ArtistComponent,
    MusicItemChartComponent,
    GenreComponent,
    MusicItemGenreComponent,
    ChartLayoutComponent,
    ChartAlbumLayoutComponent,
    MusicPlayerComponent]