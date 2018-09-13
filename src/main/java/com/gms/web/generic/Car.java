package com.gms.web.generic;

import java.util.Comparator;


public class Car{
	String name;
	int price;
	Car(String name, int price){
		this.name=name;
		this.price=price;
	}
	@Override
	public String toString() {
		return "차량명::" + name + ", 가격::" + price +"\n";
	}
	
}
class BMW extends Car{
	BMW(String name, int price){
		super(name,price);
	}
}
class Avante extends Car{
	Avante(String name, int price){
		super(name,price);
	}
}
class Sonata extends Car{
	Sonata(String name, int price){
		super(name,price);
	}
}
class Genesis extends Car{
	Genesis(String name, int price){
		super(name,price);
	}
}
class CarOrder implements Comparator<Car>{
	public int compare(Car c1, Car c2) {
		return c2.price-c1.price;
	}
}
class CarBox<T extends Car> extends Box<T>{}









