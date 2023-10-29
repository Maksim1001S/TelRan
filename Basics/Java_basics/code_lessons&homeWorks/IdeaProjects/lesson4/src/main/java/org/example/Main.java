package org.example;

import java.util.Random;

public class Main {
    private static Random random = new Random();
    public static void main(String[] args) {
        for (int i = 0, j = 10; i < 20 && j > 0; i++, j--){
            System.out.printf("i=%d, j=%d\n", i, j);
        }
        for (int i = 1; i<10; i++) {
            for (int j = 1; j < 10; j++){
                System.out.printf("%d\t", i * j);
            }
            System.out.println();
        }
        System.out.println(generateRandomInteger1());
    }
    public static int calculateSumOfTwoNumbers(int first, int second) throws NullPointerException, ArrayIndexOutOfBoundsException {
//        int sum = first + second;
//        return sum;
        return first + second;
    }

    public static int generateRandomInteger() {
        return random.nextInt(201) - 100;
    }

    /**
     * рандомное число от 1 до 100
     * @return
     */
    public static int generateRandomInteger1() {
        return (int) (Math.random() * 100) + 1;
    }

}