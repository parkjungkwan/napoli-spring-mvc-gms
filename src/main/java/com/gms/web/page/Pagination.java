package com.gms.web.page;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component @Data @Lazy
public class Pagination implements Proxy{
	int countRow, pageNumber,beginRow, endRow, pageSize, 
		blockSize, pageCount, blockCount, beginPage, endPage, prevBlock, nextBlock, lastBlockPage;
	boolean existPrev, existNext;

	@Override
	public void carryOut(Map<?,?> p) {
		this.pageNumber = (int) p.get("pageNumber");
		this.pageSize=5;
		this.blockSize=5;
		this.beginRow = pageNumber*pageSize-(pageSize-1);
		this.endRow = pageNumber*pageSize;
		this.countRow =(int) p.get("countRow");
		this.pageCount = countRow%pageSize==0?countRow/pageSize:countRow/pageSize+1;
		this.blockCount = pageCount%blockSize==0?pageCount/blockSize:pageCount/blockSize+1;
		this.beginPage= pageNumber-((pageNumber-1)%blockSize);
		this.lastBlockPage=pageCount-((pageCount-1)%blockSize);
		this.endPage=((lastBlockPage+pageSize)>pageNumber&&pageNumber>=lastBlockPage)?pageCount:beginPage+(blockSize-1);
		this.prevBlock = beginPage - blockSize;
		this.nextBlock = beginPage + blockSize;
		this.existPrev=(prevBlock>=0);
		this.existNext=(nextBlock<=pageCount);
		// countRow, existPrev, prevBlock, beginPage, existNext, nextBlock
		
	}
}
