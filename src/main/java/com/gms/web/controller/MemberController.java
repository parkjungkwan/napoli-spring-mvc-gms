package com.gms.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.gms.web.domain.MemberDTO;
import com.gms.web.service.MemberService;

@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberController {
	static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberDTO member;
	/*이게 자바의 new member같이 스프링에서 가져오는 싱글톤객체*/
	@Autowired MemberService memberService;
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String add(@ModelAttribute("member") MemberDTO member) {
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
	public String retrieve(@ModelAttribute("user") MemberDTO user) {
		logger.info("\n--------- MemberController {} !!-----","retrieve()");
		memberService.retrieve(user.getUserid());
		return "retrieve";
	}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("user") MemberDTO user) {
		logger.info("\n--------- MemberController {} !!-----","modify()");
		memberService.modify(user);
		return "retrieve";
	}
	@RequestMapping(value="/remove", method=RequestMethod.POST)
	public String remove(@ModelAttribute MemberDTO member,
			@ModelAttribute("user") MemberDTO user,
			SessionStatus session){
		logger.info("\n--------- MemberController {} !!-----","remove()");
		member.setUserid(user.getUserid());
		memberService.remove(member);
		session.setComplete();
		return "redirect:/";
	}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(Model model, @ModelAttribute("member") MemberDTO member) {
		logger.info("\n--------- MemberController {} !!-----","login()");
		String loginval = "login_failed";
		if(memberService.login(member).equals("1")) {
			model.addAttribute("user", memberService.retrieve(member.getUserid()));
			loginval = "login_success";
		}
		return loginval;
	}
	@RequestMapping("/logout")
	public String logout(SessionStatus session) {
		logger.info("\n--------- MemberController {} !!-----","logout()");
		session.setComplete();
		return "redirect:/";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
}
