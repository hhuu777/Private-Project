package com.mosic.biz.music;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.mosic.biz.music.domain.MusicVO;

@Mapper
public interface MusicService {
	// 음악 등록
	void insertMusic(MusicVO vo);
		
	// 음악 삭제
	void deleteMusic(MusicVO vo);
	
	// 음악 수정
	void updateMusic(MusicVO vo);
	
	// 음악 상세정보 조회
	MusicVO getMusic(MusicVO vo);
	
	// 모든 음악 상세정보 조회
	List<MusicVO> getAllMusic(MusicVO vo);	
}
