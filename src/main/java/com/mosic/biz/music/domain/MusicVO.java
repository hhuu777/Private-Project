package com.mosic.biz.music.domain;

public class MusicVO {
	private int id;
	private int rank;
	private int thumb;
	private String title;
	private String artist;
	private String album;
	private String genre;
	private String location;
	private String description;
	private String categories;
	private String albumArt;
	private String artistArt;
	private String musicSrc;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public int getRank() {
		return rank;
	}
	
	public void setRank(int rank) {
		this.rank = rank;
	}
	
	public int getThumb() {
		return thumb;
	}
	
	public void setThumb(int thumb) {
		this.thumb = thumb;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getArtist() {
		return artist;
	}
	
	public void setArtist(String artist) {
		this.artist = artist;
	}
	
	public String getAlbum() {
		return album;
	}
	
	public void setAlbum(String album) {
		this.album = album;
	}
	
	public String getGenre() {
		return genre;
	}
	
	public void setGenre(String genre) {
		this.genre = genre;
	}
	
	public String getLocation() {
		return location;
	}
	
	public void setLocation(String location) {
		this.location = location;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategories() {
		return categories;
	}

	public void setCategories(String categories) {
		this.categories = categories;
	}

	public String getAlbumArt() {
		return albumArt;
	}

	public void setAlbumArt(String albumArt) {
		this.albumArt = albumArt;
	}

	public String getArtistArt() {
		return artistArt;
	}

	public void setArtistArt(String artistArt) {
		this.artistArt = artistArt;
	}

	public String getMusicSrc() {
		return musicSrc;
	}

	public void setMusicSrc(String musicSrc) {
		this.musicSrc = musicSrc;
	}

	@Override
	public String toString() {
		return "MusicVO [id=" + id + ", rank=" + rank + ", thumb=" + thumb + ", title=" + title + ", artist=" + artist
				+ ", album=" + album + ", genre=" + genre + ", location=" + location + ", description=" + description
				+ ", categories=" + categories + ", albumArt=" + albumArt + ", artistArt=" + artistArt + ", musicSrc="
				+ musicSrc + "]";
	}

}
