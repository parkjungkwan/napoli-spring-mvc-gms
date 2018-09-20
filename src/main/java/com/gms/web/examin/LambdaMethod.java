package com.gms.web.examin;

import java.util.function.*;

/*
Supplier<> T get()
Consumer<> void accept(T t)
Function<>  R apply(T t)
Predicate<> boolean test(T t)
 * */
public class LambdaMethod {
	public static void main(String[] args) {
		Function<String,Integer> f = Integer::parseInt;
		int a = f.apply("5");
		System.out.println(a);
		Consumer<String> c = System.out::println;
		c.accept("Hello Lambda !!");	
	}


}





