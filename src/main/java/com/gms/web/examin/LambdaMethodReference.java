package com.gms.web.examin;
import java.util.function.*;
public class LambdaMethodReference {
	public static void main(String[] args) {
		Function<String,Integer> f= Integer::parseInt;
		int a = f.apply("3")+f.apply("2");
		System.out.println(a);
	/*	BiFunction<String, String, Boolean> bf
			= (p1,p2)->p1.equals(p2);*/
		BiFunction<String, String, Boolean> bf
			= String::equals;
		System.out.println("결과::"+bf.apply("a", "a"));
		
		
	}
}
