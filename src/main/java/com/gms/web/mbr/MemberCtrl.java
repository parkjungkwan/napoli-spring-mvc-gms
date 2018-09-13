package com.gms.web.mbr;

import java.util.function.Function;

import java.util.function.Predicate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.gms.web.cmm.Util;

@RestController
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	/*@Autowired Member member;
	이게 자바의 new member같이 스프링에서 가져오는 싱글톤객체
	@Autowired MemberService memberService;
	@Autowired MemberMapper mbrMapper;
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String add(@ModelAttribute("member") Member member) {
		logger.info("\n--------- MemberController {} !!-----","add()");
		String val = "add_failed";
		if(memberService.retrieve(member.getUserid())==null) {
			memberService.add(member);
			val="login_failed";
		} 
		return val;
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {}
	@RequestMapping("/retrieve")
	public String retrieve(@ModelAttribute("user") Member user) {
		logger.info("\n--------- MemberController {} !!-----","retrieve()");
		memberService.retrieve(user.getUserid());
		return "retrieve";
	}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("user") Member user) {
		logger.info("\n--------- MemberController {} !!-----","modify()");
		memberService.modify(user);
		return "retrieve";
	}
	@PostMapping("/login")
	public String login(Model model, @ModelAttribute("member") Member param) {
		logger.info("\n ::: MemberController {} :::","login()");
		String view = "login_failed";
		if(Util.notNull.test(mbrMapper.exist(param.getUserid()))) {
			Function<Member,String> f = (t)->{
				return mbrMapper.login(t);
			};
			view = (f.apply(param).equals("1")) ?
					"login_success":
					"login_failed";
		}
		member = (Predicate.isEqual("login_success").test(view))?
			 mbrMapper.selectOne(param.getUserid()):
		     new Member()
			;
			 Util.log.accept(member.toString());	 
		return view;
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}*/
}
