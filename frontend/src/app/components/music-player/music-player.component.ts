import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {
    @ViewChild('audioSrc') audio : ElementRef;
    @ViewChild('volume') changeVolume : ElementRef;
    playFlag : boolean = false;
    muteFlag : boolean = false;
    loopFlag : boolean = false;
    currentTime : number;

    ngOnInit() {
        this.currentTime = parseInt(this.audio.nativeElement.currentTime);
    }

    playMusic() {
        this.audio.nativeElement.play();
        this.playFlag = true;
    }

    pauseMusic() {
        this.audio.nativeElement.pause();
        this.playFlag = false;
    }

    muteMusic() {
        this.muteFlag = !this.muteFlag;
        this.audio.nativeElement.muted = this.muteFlag;
    }

    loopMusic() {
        this.loopFlag = !this.loopFlag;
        this.audio.nativeElement.loop = this.loopFlag;
    }

    controlVolume() {
        var conVolume = this.changeVolume.nativeElement.value;
        this.audio.nativeElement.volume = conVolume;
    }

}
