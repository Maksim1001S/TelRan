package org.example.functions;

public class functions {

    /*task.1*/
     public void Do_NumericalDigit(int number){
         int m = 1;
         for(int a = number; a > 0; a /= 10) {
             System.out.println("разряд " + m + ": "+ a % 10);
             m *= 10;
        }
     }
    /*task.1*/

    /*task.2*/
    public void Do_FromDecToHex(int number){
        String HexNumber ="";
        for(int a = number; a > 0; a /= 16) {
            int c = a % 16;
            if (c == 0){
                HexNumber = "0" + HexNumber;
            }else if (c == 1){
                HexNumber = "1" + HexNumber;
            }else if (c == 2){
                HexNumber = "2" + HexNumber;
            }else if (c == 3){
                HexNumber = "3" + HexNumber;
            }else if (c == 4){
                HexNumber = "4" + HexNumber;
            }else if (c == 5){
                HexNumber = "5" + HexNumber;
            }else if (c == 6){
                HexNumber = "6" + HexNumber;
            }else if (c == 7){
                HexNumber = "7" + HexNumber;
            }else if (c == 8){
                HexNumber = "8" + HexNumber;
            }else if (c == 9){
                HexNumber = "9" + HexNumber;
            }else if (c == 10){
                HexNumber = "A" + HexNumber;
            }else if (c == 11){
                HexNumber = "B" + HexNumber;
            }else if (c == 12){
                HexNumber = "C" + HexNumber;
            }else if (c == 13){
                HexNumber = "D" + HexNumber;
            }else if (c == 14){
                HexNumber = "E" + HexNumber;
            }else if (c == 15){
                HexNumber = "F" + HexNumber;
            }else if (c == 16){
                HexNumber = "10" + HexNumber;
            }else if (c == 32){
                HexNumber = "20" + HexNumber;
            }else if (c == 64){
                HexNumber = "40" + HexNumber;
            }else if (c == 128){
                HexNumber = "80" + HexNumber;
            }else if (c == 256){
                HexNumber = "100" + HexNumber;
            }

        }
        System.out.println("\nперевод числа " + number + " в 16 систему: " + HexNumber);
    }
    /*task.2*/

    /*task.3*/
    public void Do_FromDecToBinary(int number){
        String BinaryNumber ="";
        for(int a = number; a > 0; a /= 2) {
            int c = a % 2;
            if (c == 0) {
                BinaryNumber = "0" + BinaryNumber;
            } else if (c == 1) {
                BinaryNumber = "1" + BinaryNumber;

            }
        }
            System.out.println("\nперевод числа " + number + " в 2 систему: " + BinaryNumber);
    }
    /*task.3*/

    /*task.5*/
    public void Do_FromDecToTernary(int number){
        String DecNumber ="";
        for(int a = number; a > 0; a /= 3) {
            int c = a % 3;
            if (c == 0){
                DecNumber = "0" + DecNumber;
            }else if (c == 1){
                DecNumber = "1" + DecNumber;
            }else if (c == 2){
                DecNumber = "2" + DecNumber;
            }

        }
        System.out.println("\nперевод числа " + number + " в 3 систему: " + DecNumber);
        }
    }
    /*task.5*/


