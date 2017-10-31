package com.mosic.biz.album;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.mosic.biz.album.domain.AlbumVO;

@Mapper
public interface AlbumService {
	// 수록곡 등록
	void insertAlbum(AlbumVO vo);
		
	// 수록곡 삭제
	void deleteAlbum(AlbumVO vo);
	
	// 수록곡 수정
	void updateAlbum(AlbumVO vo);
	
	// 일치하는 앨범의 수록곡 상세정보 조회
	AlbumVO getAlbumById(int id);
	
	// 일치하는 아티스트의 수록곡 상세정보 조회
	AlbumVO getAlbumByArtist(AlbumVO vo);
	
	// 모든 수록곡 상세정보 조회
	List<AlbumVO> getAllAlbum(AlbumVO vo);	
}
