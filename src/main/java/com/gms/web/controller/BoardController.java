package com.gms.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.gms.web.domain.ArticleDTO;
import com.gms.web.service.BoardService;

@Controller
@RequestMapping("/board")
public class BoardController {
	static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@Autowired ArticleDTO articleDTO;
	@Autowired BoardService boardService;
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String add() {
		logger.info("\n--------- MemberController {} !!-----","add()");
		return "";
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {}
	@RequestMapping("/retrieve/{userid}")
	public String retrieve() {
		logger.info("\n--------- MemberController {} !!-----","retrieve()");
		return "retrieve";
	}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping(value="/modify/{userid}", method=RequestMethod.POST)
	public String modify() {
		logger.info("\n--------- MemberController {} !!-----","modify()");
		return "retrieve";
	}
	@RequestMapping(value="/remove/{userid}", method=RequestMethod.POST)
	public String remove(){
		logger.info("\n--------- MemberController {} !!-----","remove()");
		return "redirect:/";
	}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login() {
		logger.info("\n--------- MemberController {} !!-----","login()");
		String loginval = "login_failed";
		return loginval;
	}
	@RequestMapping("/logout")
	public String logout() {
		logger.info("\n--------- MemberController {} !!-----","logout()");
		return "redirect:/";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
}
