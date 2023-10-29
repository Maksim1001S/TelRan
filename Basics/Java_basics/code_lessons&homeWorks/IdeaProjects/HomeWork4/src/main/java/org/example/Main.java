package org.example;

import java.util.Random;
import java.util.Scanner;

public class Main {
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Write sentence here");

        String sentence = scanner.nextLine();
        String[] words = sentence.split(" ");
        String firstWord = words[0];
        String lastWord = words[words.length - 1];
        if(words[0].length() % 2 == 0 && words[words.length - 1].length() % 2 == 0) {
            char[] charFirstWord = firstWord.toCharArray();
            char[] charLastWord = lastWord.toCharArray();
            String halfFirstWord = "";
            String halfLastWord = "";
            for (int i = 0; i < (firstWord.length()) / 2; i++) {
                halfFirstWord += charFirstWord[i];
            }
            for (int i = 0; i < (lastWord.length()) / 2; i++) {
                halfLastWord += charLastWord[i];
            }
            String newWord = halfFirstWord + halfLastWord;
            System.out.println(newWord);
        } else {
            System.out.println("error");
        }
    }
}