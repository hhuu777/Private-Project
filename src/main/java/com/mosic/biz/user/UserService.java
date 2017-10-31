package com.mosic.biz.user;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.mosic.biz.user.domain.UserVO;

@Mapper
public interface UserService {
	// 유저 등록
	void insertUser(UserVO vo);
	
	// 유저 삭제
	void deleteUser(UserVO vo);
	
	// 유저 수정
	void updateUser(UserVO vo);
	
	// 유저 상세정보 조회
	UserVO getUser(UserVO vo);
	
	// 모든 유저 상세정보 조회
	List<UserVO> getAllUser(UserVO vo);
}
