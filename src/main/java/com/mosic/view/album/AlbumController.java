package com.mosic.view.album;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mosic.biz.album.dao.AlbumDAO;
import com.mosic.biz.album.domain.AlbumVO;

@RestController
@RequestMapping("/album")
@CrossOrigin(origins = "http://localhost:4200/#/album/0")
public class AlbumController {
	
	@Autowired
	private AlbumDAO albumDAO;
	
	@GetMapping(value = "/all-album", produces = "application/json")
	public ResponseEntity<List<AlbumVO>> getAllAlbum (AlbumVO vo) {
		List<AlbumVO> allAlbum = albumDAO.getAllAlbum(vo);
		return new ResponseEntity<List<AlbumVO>>(allAlbum, HttpStatus.OK);
	}
	
	@GetMapping(value = "/detail", produces = "application/json")
	public ResponseEntity<AlbumVO> getAlbumById () {
		AlbumVO album = albumDAO.getAlbumById(0);
		return new ResponseEntity<AlbumVO>(album, HttpStatus.OK);
	}
	
}
