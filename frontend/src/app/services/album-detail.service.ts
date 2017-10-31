export class AlbumMusic {
    constructor(public id : number,
                public musicNum : number,
                public musicName : string,
                public musicURL : string,
                public artist : string,
                public title : boolean) {}
}

export class AlbumMusicService {
    getAlbumMusic (a : number) : Array<AlbumMusic> {
        return album.filter(p=>p.id === a);
    }

    getArtistMusic (a : string) : Array<AlbumMusic> {
        return album.filter(p=>p.artist === a);
    }
}

var album = [
    {
        "id" : 0,
        "musicNum" : 1,
        "musicName" : "testName",
        "musicURL" : "test",
        "artist" : "test",
        "title" : true
    },
    {
        "id" : 0,
        "musicNum" : 2,
        "musicName" : "testName2",
        "musicURL" : "test2",
        "artist" : "test",
        "title" : false
    },
    {
        "id" : 0,
        "musicNum" : 3,
        "musicName" : "testName3",
        "musicURL" : "test3",
        "artist" : "test",
        "title" : false
    },
    {
        "id" : 1,
        "musicNum" : 1,
        "musicName" : "testName",
        "musicURL" : "test",
        "artist" : "test2",
        "title" : true
    },
    {
        "id" : 2,
        "musicNum" : 1,
        "musicName" : "testName",
        "musicURL" : "test",
        "artist" : "test3",
        "title" : true
    },
    {
        "id" : 2,
        "musicNum" : 2,
        "musicName" : "testName2",
        "musicURL" : "test2",
        "artist" : "test3",
        "title" : false
    },
    {
        "id" : 3,
        "musicNum" : 1,
        "musicName" : "testName",
        "musicURL" : "test",
        "artist" : "test4", 
        "title" : true
    },
    {
        "id" : 4,
        "musicNum" : 1,
        "musicName" : "testName",
        "musicURL" : "test",
        "artist" : "test5",
        "title" : true
    },
    {
        "id" : 5,
        "musicNum" : 1,
        "musicName" : "testName",
        "musicURL" : "test",
        "artist" : "test6",
        "title" : true
    },
]