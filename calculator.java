//January 19, 2025
import java.util.Scanner;

class calculator{

    public static int num1, num2, sum, difference, product, quotient;

    public static void main(String[] args) {
        System.out.println("Calculator: ");

        try (Scanner input = new Scanner(System.in)) {
            System.out.println("Enter Num1: ");
            num1 = input.nextInt();

            System.out.println("Enter Num2: ");
            num2 = input.nextInt();

            //Choice 
            System.out.println("Choices: ");
            System.out.println("1 - Addition");
            System.out.println("2 - subtraction");
            System.out.println("3 - multiplication");
            System.out.println("4 - division");

            //ask user choice..
            System.out.println("Enter Number Choice: ");
            String choice = input.next();

            if(choice.equalsIgnoreCase("1")){
                addNumbers();
            }else if(choice.equalsIgnoreCase("2")){
                subtractNumbers();
            }else if(choice.equalsIgnoreCase("3")){
                multiplyNumbers();
            }else if(choice.equalsIgnoreCase("4")){
                divideNumbers();
            }else{
                System.out.println("Invalid Choice");
            }

        }
    }

    public static void addNumbers(){
        sum = num1 + num2;
        System.out.println(sum);
    }

    public static void subtractNumbers(){
        difference = num1 - num2;
        System.out.println(difference);
    }
    public static void multiplyNumbers(){
        product = num1 * num2;
        System.out.println(product);
    }
    public static void divideNumbers(){
        quotient = num1 / num2;
        System.out.println(quotient);
    }
}