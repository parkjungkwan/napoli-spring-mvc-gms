package com.gms.web.lambda;

import java.util.function.Function;
import java.util.function.Predicate;

import com.gms.web.mbr.Member;

/*
Consumer<T>  void accept(T t)
Function<T,R> R apply(T t)
Predicate<T> boolean test(T t)
Supplier<T> T get()
UnaryOperator<T> static <T> UnaryOperator<T> identity()
 * */
public class OracleLambda {
	public static void main(String[] args) {
		Predicate<String> p = s -> s.length() == 0;
		String x = "";
		String y = "hello";
		String r = (p.test(y)) ? "NULL":"NOT NULL";
		System.out.println(r);
		//Function<Member,Member> f = m -> apply(m);
	}

}







