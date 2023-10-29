package org.example;

public class Main {
    static String string = new String("I study Java!");
    public static void main(String[] args) {
        Get_string(string);

    }

    public static void Get_string(String information){
        char LastChar = information.charAt(12);
        boolean FindWord = information.contains("Java");
        System.out.println(LastChar);
        System.out.println("содержит ли ваша строка подстроку " + "'Java': " + FindWord);
        System.out.println(information.replace("a", "o"));
        System.out.println(information.toUpperCase());
        System.out.println(information.toLowerCase());
        System.out.println(information.substring(0,7));
    }
}