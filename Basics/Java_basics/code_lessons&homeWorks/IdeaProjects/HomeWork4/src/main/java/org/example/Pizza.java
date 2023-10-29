package org.example;

public class Pizza {


    public static void main(String[] args) {
        int R_pizza28cm = 28 / 2;
        int squarePizza28cm = (int) (R_pizza28cm * R_pizza28cm * Math.PI);

        int R_pizza24cm = 24 / 2;
        int squarePizza24cm = (int) (R_pizza24cm * R_pizza24cm * Math.PI);

        int CaloriesOfPizza28 = squarePizza28cm * 40;
        int CaloriesOfPizza24 = squarePizza24cm * 40;

        int extraCal = CaloriesOfPizza28 - CaloriesOfPizza24;
        System.out.println(extraCal);


    }
}