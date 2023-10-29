package org.example;

import org.example.functions.functions;

import java.util.function.Function;

public class Main {
    /*task.0*/
    static int HexIntNumber = 0x333;
    /*task.0*/

    /*task.1*/
    static int DecIntNumber1 = 200345;//любое число
    /*task.1*/

    /*task.2*/
    static int DecIntNumber2 = 637;//любое число
    /*task.2*/
    static int BinaryIntNumber = 0b11100111;



    public static void main(String[] args) {
        functions fn = new functions();
        /*task.0*/
        System.out.println("Перевод числа 333 из 16 системы в 10: " + HexIntNumber);
        /*task.0*/

        /*task.1*/
        System.out.println("\nразряды числа 200345: ");
        fn.Do_NumericalDigit(DecIntNumber1);
        /*task.1*/

        /*task.2*/
        fn.Do_FromDecToHex(DecIntNumber2);
        /*task.2*/

        /*task.3*/
        fn.Do_FromDecToBinary(DecIntNumber2);
        /*task.3*/

        /*task.4*/
        System.out.println("\nперевод числа " + 11100111 + " в 10 систему: " + BinaryIntNumber);
        /*task.4*/

        /*task.5*/
        fn.Do_FromDecToTernary(DecIntNumber2);
        /*task.3*/

    }


}