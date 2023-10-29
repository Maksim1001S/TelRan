package org.example;


import java.util.Arrays;

public class arrays {
    static int [] arr1 = {1,2,3,4,5,6,7,8,9};

    private static void shiftArraySimple(int[] arr1) {
        int temp = arr1[0];
        for (int i = 0; i < arr1.length - 1; i++){
            arr1[i] = arr1[i + 1];
        }
        arr1[arr1.length - 1] = temp;
    }

    public static void main(String[] args) {
        shiftArraySimple(arr1);
        System.out.println(Arrays.toString(arr1));
//
//        int[] arr = new int[5];
//        arr[0] = 10;
//        arr[1] = 11;
//        arr[2] = 12;
//        arr[3] = 13;
//        arr[4] = 14;
//        arr[4] = arr[0] * arr[2] - 100;
//        System.out.println(Arrays.toString(arr));
//
//
//        for (int i : arr) {
//            System.out.println(i);
//        }
//        for (int i = 0; i < arr.length; i++) {
//            arr[i] = arr[i] % 2 == 0 ? arr[i] / 2 : arr[i];
//        }
//        System.out.println(Arrays.toString(arr));
    }
}
