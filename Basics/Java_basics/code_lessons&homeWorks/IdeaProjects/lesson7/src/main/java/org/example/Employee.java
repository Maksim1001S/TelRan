package org.example;

//Инкапсюляция, Наследование, Полиморфизм, Абстракция
public class Employee {
    private String name;
    private String position;
    private int age;

    public Employee(String name, String position, int age) {
        this.name = name;
        this.position = position;
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }


}
