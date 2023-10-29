package org.example;

public class MathResult {

    public static void main(String[] args) {
        System.out.println(addition(12, 13));
        System.out.println(subtraction(12, 13));
        System.out.println(multiplication(12, 13));
        System.out.println(division(12, 13));
    }
    private static int addition(int number1, int number2) {
        return number1 + number2;
    }
    private static int subtraction(int number1, int number2) {
        return number1 - number2;
    }
    private static int multiplication(int number1, int number2) {
        return number1 * number2;
    }
    private static int division(int number1, int number2) {
        return number1 / number2;
    }
}
