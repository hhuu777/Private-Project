package com.mosic.biz.album.domain;

public class AlbumVO {
	private int id;
	private int trackNum;
	private String trackName;
	private String trackSrc;
	private String artist;
	private boolean isTitle;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public int getTrackNum() {
		return trackNum;
	}
	
	public void setTrackNum(int trackNum) {
		this.trackNum = trackNum;
	}
	
	public String getTrackName() {
		return trackName;
	}
	
	public void setTrackName(String trackName) {
		this.trackName = trackName;
	}
	
	public String getTrackSrc() {
		return trackSrc;
	}
	
	public void setTrackSrc(String trackSrc) {
		this.trackSrc = trackSrc;
	}
	
	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public boolean isTitle() {
		return isTitle;
	}
	
	public void setTitle(boolean isTitle) {
		this.isTitle = isTitle;
	}

	@Override
	public String toString() {
		return "AlbumVO [id=" + id + ", trackNum=" + trackNum + ", trackName=" + trackName + ", trackSrc=" + trackSrc
				+ ", isTitle=" + isTitle + "]";
	}
}
