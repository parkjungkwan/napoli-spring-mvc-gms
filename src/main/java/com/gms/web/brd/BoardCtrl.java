package com.gms.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.TaeHyung;
import com.gms.web.cmm.YoonHo;
import com.gms.web.mbr.Member;
import com.gms.web.mbr.MemberCtrl;
import com.gms.web.mbr.MemberMapper;
import com.gms.web.page.Pagination;

@RestController
public class BoardCtrl {
	static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired Member mbr;
	@Autowired MemberMapper mbrMap;
	@Autowired TaeHyung tae;
	@Autowired BoardMapper brdMap;
	@Autowired Pagination page;
	@Autowired HashMap<String,Object> map;
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody Map<String,Object> 
		list(@PathVariable String pageNo){
		logger.info("\n BoardCtrl ::::: {} ","list");
		map.clear();
		YoonHo.log.accept("넘어온 페이지 :"+pageNo);
		map.put("pageNumber", Integer.parseInt(pageNo));
		YoonHo.log.accept("전체 게시글 수 :"+brdMap.countAll());
		map.put("countRow", brdMap.countAll());
		page.carryOut(map);
		// countRow, existPrev, prevBlock, beginPage, existNext, nextBlock
		YoonHo.log.accept("countRow :"+page.getCountRow());
		YoonHo.log.accept("existPrev :"+page.isExistNext());
		YoonHo.log.accept("prevBlock :"+page.getPrevBlock());
		YoonHo.log.accept("beginPage :"+page.getBeginPage());
		YoonHo.log.accept("endPage :"+page.getEndPage());
		YoonHo.log.accept("existNext :"+page.isExistNext());
		YoonHo.log.accept("nextBlock :"+page.getNextBlock());
		List<Board> list = brdMap.listAll(page);
		YoonHo.log.accept("게시글 리스트 :"+list);
		map.clear();
		map.put("list",list);
		map.put("page", page);
		return map;
	}
}







