export class Music {
	constructor (public id : number,
				 public rank : number,
				 public thumb : number,
				 public title : string,
				 public artist : string,
				 public album : string,
				 public genre : string,
				 public location : string,
				 public description : string,
	             public categories : Array<string>) {}
}

export class MusicService {
	getMusics () : Array<Music> {
		return musics.map(p => new Music(p.id, p.rank, p.thumb, p.title, p.artist ,p.album , p.genre, p.location, p.description, p.categories));
	}

	getMusicsGenre (g : string) : Array<Music> {
		return musics.filter(p => p.genre === g);
	}

	getMusicAlbum (g : number) : Music {
		return musics.find(p => p.id === g);
	}

	getMusicArtist (a : string) : Music {
		return musics.find(p => p.artist === a);
	}

	getMusicArtistAlbum (a : string) : Array<Music> {
		return musics.filter(p => p.artist === a);
	}

	getMusicLocationAlbum (l : string) : Array<Music> {
		return musics.filter(p => p.location === l);
	}
}

var musics = [
	{
		"id" : 0,
		"rank" : 1,
		"thumb" : 0,
		"title" : "First Product",
		"artist" : "test",
		"album" : "test",
		"genre" : "ballad",
		"location" : "korea",
		"description" : "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"categories" : ["electronics", "hardware"]
	},
	{
		"id" : 1,
		"rank" : 1,
		"thumb" : 0,
		"title" : "First Product",
		"artist" : "test",
		"album" : "test",
		"genre" : "ballad",
		"location" : "korea",
		"description" : "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"categories" : ["electronics", "hardware"]
	},
	{
		"id" : 2,
		"rank" : 1,
		"thumb" : 0,
		"title" : "Second Product",
		"artist" : "test2",
		"album" : "test",
		"genre" : "dance",
		"location" : "korea",
		"description" : "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"categories" : ["books"]
	},
	{
		"id" : 3,
		"rank" : 1,
		"thumb" : 0,
		"title" : "Third Product",
		"artist" : "test3",
		"album" : "test",
		"genre" : "koHiphop",
		"location" : "korea",
		"description" : "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"categories" : ["electronics"]
	},
	{
		"id" : 4,
		"rank" : 1,
		"thumb" : 0,
		"title" : "Fourth Product",
		"artist" : "test4",
		"album" : "test",
		"genre" : "koRnb",
		"location" : "korea",
		"description" : "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"categories" : ["hardware"]
	},
	{
		"id" : 5,
		"rank" : 1,
		"thumb" : 0,
		"title" : "Fifth Product",
		"artist" : "test5",
		"album" : "test",
		"genre" : "koRock",
		"location" : "korea",
		"description" : "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"categories" : ["electronics", "hardware"]
	},
	{
		"id" : 6,
		"rank" : 1,
		"thumb" : 0,
		"title" : "Sixth Product",
		"artist" : "test6",
		"album" : "test",
		"genre" : "koRock",
		"location" : "korea",
		"description" : "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"categories" : ["books"]
	},
		{
		"id" : 7,
		"rank" : 1,
		"thumb" : 0,
		"title" : "First Product",
		"artist" : "test7",
		"album" : "test",
		"genre" : "pop",
		"location" : "abroad",
		"description" : "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"categories" : ["electronics", "hardware"]
	},
	{
		"id" : 8,
		"rank" : 1,
		"thumb" : 0,
		"title" : "Second Product",
		"artist" : "test8",
		"album" : "test",
		"genre" : "abHiphop",
		"location" : "abroad",
		"description" : "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"categories" : ["books"]
	},
	{
		"id" : 9,
		"rank" : 1,
		"thumb" : 0,
		"title" : "Third Product",
		"artist" : "test9",
		"album" : "test",
		"genre" : "elec",
		"location" : "abroad",
		"description" : "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"categories" : ["electronics"]
	},
	{
		"id" : 10,
		"rank" : 1,
		"thumb" : 0,
		"title" : "Fourth Product",
		"artist" : "test10",
		"album" : "test",
		"genre" : "abRnb",
		"location" : "abroad",
		"description" : "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"categories" : ["hardware"]
	},
	{
		"id" : 11,
		"rank" : 1,
		"thumb" : 0,
		"title" : "Fifth Product",
		"artist" : "test11",
		"album" : "test",
		"genre" : "abRock",
		"location" : "abroad",
		"description" : "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"categories" : ["electronics", "hardware"]
	},
	{
		"id" : 12,
		"rank" : 1,
		"thumb" : 0,
		"title" : "Sixth Product",
		"artist" : "test12",
		"album" : "test",
		"genre" : "abRock",
		"location" : "abroad",
		"description" : "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"categories" : ["books"]
	},
];