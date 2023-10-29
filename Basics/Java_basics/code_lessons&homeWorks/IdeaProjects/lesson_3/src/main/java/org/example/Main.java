package org.example;

import java.util.Random;

public class Main {

    private static Random random;

    public static void main(String[] args) {
        System.out.println("Welcome");

        if (args.length < 2) {
            System.err.println("Not enough args");
            System.exit(-1);
        }

        System.out.println("Your args");
        for (int i = 0; i < args.length; i++){
            System.out.println(args[i] + " ");
        }

        System.out.println();
        int operand1 = Integer.parseInt(args[0]);
        int operand2 = Integer.parseInt(args[1]);
        int sum = operand1 * operand2;

        System.out.println("Your result = %d");





        car Car = new car("n", "b", "f");
        }
    }
