package org.example;

public class Main {
    public static void main(String[] args) {
        System.out.println("bef");
        divideByZero();
        System.out.println("af");

        throwExample();
    }
    static int a = 10;
    static int n = 0;

    public static void divideByZero() {
        try {
            int i = a / n;
        } catch (ArithmeticException exception) {
            System.out.println("Don't divide by zero");
//            exception.printStackTrace();
        }
    }


    private static void throwExample() {
        throw new MyCastomExeption();
    }
}