public class Main {
//    task 1
    public static char Char = 'G';
    public static int Int = 89;
    public static byte Byte = 4;
    public static short Short = 56;
    public static float Float = 4.7333436F;
    public static double Double = 4.355453532;
    public static long Long = 3242342342L;
//    task 1


//    task 2
/*любое трехзначное число*/
    static int number = 431;
    static int unit = number % 10;
    static int dozens = number / 10 % 10;
    static int hundreds = number / 100;

//    task 2

    public static void main(String[] args) {
//    task 1
        System.out.println(Char);
        System.out.println(Int);
        System.out.println(Byte);
        System.out.println(Short);
        System.out.println(Float);
        System.out.println(Double);
        System.out.println(Long);
//    task 1


//    task 2
        System.out.println("единицы: " + unit);
        System.out.println("десятки: " + dozens);
        System.out.println("сотни: " + hundreds);
//    task 2
    }
}