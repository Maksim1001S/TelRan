package org.example;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Car car1 = new Car("BMW", "M8", "GREEN");
        Car car2 = new Car("Toyota", "Supra", "Red");

        Racer racer1 = new Racer("Alex", "10 years");
        Racer racer2 = new Racer("Maks", "12 years");

        System.out.println("Race 3km\n" +
                "racer1: " + racer1.Name + ", " + racer1.Exp + "\n" +
                "racer2: " + racer2.Name + ", " + racer2.Exp + "\n" +
                "car1: " + car1.Name + ", " + car1.Model + ", " + car1.Color +"\n" +
                "car2: " + car2.Name + ", " + car2.Model + ", " + car2.Color +"\n");
        System.out.println(1);
        Thread.sleep(500);
        System.out.println(2);
        Thread.sleep(500);
        System.out.println(3);
        System.out.println("------------START--------------");
        Thread.sleep(500);
        System.out.println("50m");
        Thread.sleep(600);
        System.out.println("300m");
        Thread.sleep(800);
        System.out.println("800m");
        Thread.sleep(1000);
        System.out.println("1,5km");
        Thread.sleep(1000);
        System.out.println("3km");
        System.out.println("------------FINISH--------------");

        int timeCar1 = generateRandomInteger();
        int timeCar2 = generateRandomInteger();
        if(timeCar1 > timeCar2) {
            System.out.println(racer1.Name + " win");
        } else {
            System.out.println(racer2.Name + " win");
        }
        System.out.println(
                "TIME " + racer1.Name + ": " + timeCar1 + "s" + "\n" +
                "TIME " + racer1.Name + ": " + timeCar2 + "s"
        );
    }

    public static int generateRandomInteger() {
        return (int) (Math.random() * 30) + 31;
    }
}