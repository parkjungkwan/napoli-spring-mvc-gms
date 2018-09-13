package com.gms.web.cmm;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.Principal;
import java.util.Collection;
import java.util.Enumeration;
import java.util.Locale;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

import javax.servlet.AsyncContext;
import javax.servlet.DispatcherType;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpUpgradeHandler;
import javax.servlet.http.Part;

import org.springframework.http.HttpRequest;

public class Util {
	public static Consumer<Integer> logi = System.out :: println;
	public static Consumer<String> log = System.out :: println;
	public static Function<String,Integer> convInt = Integer::parseInt;
	public static Predicate<String> isNull = s -> s.equals("");
	public static Predicate<String> notNull = isNull.negate();
	public static Function<HttpServletRequest,String> ctx = HttpServletRequest::getContextPath;
		
}






