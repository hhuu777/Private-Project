package com.mosic.biz.album.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import com.mosic.biz.album.domain.AlbumVO;

public class AlbumDAO {
	
	@Autowired
	private SqlSession sqlSession;
	
	public AlbumVO getAlbumById(int id) {
		return sqlSession.selectOne("getAlbumById", id);
	}
	
	public List<AlbumVO> getAllAlbum(AlbumVO vo) {
		return sqlSession.selectList("getAllAlbum", vo);
	}
}
