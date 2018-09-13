package com.gms.web.mbr;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService{
	static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	@Autowired MemberMapper memberMapper;
	@Override
	public void add(Member p) {
		String age = String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date()))-(Integer.parseInt(p.getSsn().substring(0, 2))+1900-1));
		String gender = "";
		switch (p.getSsn().split("-")[1]) {
		case "1":case "3":
			gender = "남";
			break;
		case "2":case "4":
			gender = "여";
			break;
		case "5":case "6":
			gender = "외국인";
			break;
		default:
			break;
		}
		p.setAge(age);
		p.setGender(gender);
		System.out.println("나이 : "+age);
		System.out.println("성별 : "+gender);
		memberMapper.insert(p);
	}

	@Override
	public List<?> list(Map<?, ?> p) {
		return null;
	}

	@Override
	public List<?> search(Map<?, ?> p) {
		return null;
	}

	@Override
	public Member retrieve(String p) {
		logger.info("\n--------- MemberServiceImpl {} !!-----","retrieve()");
		return memberMapper.selectOne(p);
	}

	@Override
	public int count(Map<?, ?> p) {
		return 0;
	}

	@Override
	public void modify(Member p) {
		memberMapper.update(p);
	}

	@Override
	public void remove(Member p) {
		memberMapper.delete(p);
	}

	@Override
	public String login(Member p) {
		logger.info("\n--------- MemberServiceImpl {} !!-----","login()");
		
		return memberMapper.login(p);
	}

	@Override
	public void logout(Map<?, ?> p) {
		
	}

	@Override
	public void addMember(Consumer<Member> f) {
		
	}

}
