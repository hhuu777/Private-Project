import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

export class AlbumVO {
    constructor(public id : number,
                public trackNum : number,
                public trackName : string,
                public trackSrc : string,
                public artist : string,
                public isTitle : boolean) {}
}

@Injectable()
export class AlbumService {
    allAlbumUrl = "http://localhost:7171/album/all-album";
    albumUrl = "http://localhost:7171/album/album-detail";

    constructor(private http : Http) {}

    getAllAlbum(): Observable<AlbumVO[]> {
        return this.http.get(this.allAlbumUrl).map((res:Response) => res.json());
    }

    getAlbumById(): Observable<AlbumVO> {
        return this.http.get(this.albumUrl).map((res:Response) => res.json());
    }
}
