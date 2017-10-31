import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent {
    genre : string = 'ko';

    changeGenreKo () {
        this.genre = 'ko';
    }
    
    changeGenreAb () {
        this.genre = 'ab';
    }
}
