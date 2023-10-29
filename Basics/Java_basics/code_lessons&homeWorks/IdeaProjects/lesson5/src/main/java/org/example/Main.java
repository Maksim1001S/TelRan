package org.example;

import java.util.Random;
import java.util.Scanner;

public class Main {
    static Scanner scanner = new Scanner(System.in);
    static Random random = new Random();


    public static void main(String[] args) {
        while (true) {
            vending();
        }
    }

    private static void vending() {
        System.out.print("Please enter the number >>>> ");

        int num = scanner.nextInt();

        int randomNum = random.nextInt(4) +1;
        System.out.println(randomNum);

//        switch (num) {
//            case 2, 99: {  // case 2, 99 ->{
//                System.out.println("Give cola");
//                break;
//            }
//            case 3: {
//                System.out.println("Give snickers");
//                break;
//            }
//            default: {
//                System.out.println("Wrong");
//            }
//            }
//        }

        if (num == 99) {
            System.out.println("Give cola");
        } else if (num == 3) {
            System.out.println("Give snickers");
        } else {
            System.out.println("Wrong");
        }
        if (num == 3 || num == 99 && randomNum < 4 && randomNum != 1) {
            System.out.println("You have bonus!!");
        }
    }
}