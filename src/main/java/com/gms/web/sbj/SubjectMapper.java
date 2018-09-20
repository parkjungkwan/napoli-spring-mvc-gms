package com.gms.web.sbj;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.mbr.Member;

@Repository
public interface SubjectMapper {
	public void post(Subject p);
	public List<?> list(Map<?,?>p);
	public Member get(Subject p);
	public Integer count(Member p);
	public void put(Member p);
	public void delete(Member p);
}
