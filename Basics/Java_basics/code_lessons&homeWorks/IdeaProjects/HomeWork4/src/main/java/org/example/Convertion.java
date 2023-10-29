package org.example;

public class Convertion {
    public static void main(String[] args) {
        System.out.println(GiveUsdfromEur(6786));
    }
    public static int GiveUsdfromEur(int eur) {
        return (int) (eur * 1.041165);
    }
}
