package com.gms.web.page;

import java.util.HashMap;
import java.util.Map;

public class Search {
	public void test() {
		String pageNum = "pageNumber";
		Map<String,Object> param=new HashMap<>();
		PageProxy pxy = new PageProxy();
		param.put("pageNumber",(pageNum==null)?1:Integer.parseInt(pageNum));
		pxy.carryOut(param);
		//Pagination page = pxy.getPagination();
		/*for(int i = 0; i < arr1.length; i++){
			param.put(arr1[i],arr2[i]);
		};*/
	}
}
