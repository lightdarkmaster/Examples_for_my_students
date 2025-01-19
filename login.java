// For todays Totorial guys..
import java.util.Scanner;

public class login {
    
    public static String username;
    public static String password;
    
    public static void main(String[] args){

    System.out.println("Simple Login");

    try (Scanner input = new Scanner(System.in)) {
        System.out.println("Choose 1 - Sign-up");
        System.out.println("Choose 2 - Login");

        System.out.println("Enter Selection: ");
        String choose = input.next();

        if(choose.equalsIgnoreCase("1")){
            signUp();
        }else if(choose.equalsIgnoreCase("2")){
            log_in();
        }
    }


    }
    public static void signUp(){
        try (Scanner inputSignUp = new Scanner(System.in)) {
            System.out.println("Sign-up");
            System.out.println("Enter Username: ");
            username = inputSignUp .nextLine();
            System.out.println("Enter Password: ");
            password = inputSignUp.nextLine();

            log_in();
        }
    }
    public static void log_in(){
        try (Scanner loginInput = new Scanner(System.in)) {
            System.out.println("Username: ");
            String login_username = loginInput.nextLine();

            System.out.println("Password: ");
            String login_password = loginInput.nextLine();
        
            if(login_username.equals(username) && login_password.equals(password)){
                displaySomething();
            }else{
                System.out.println("Invalid Password or Username");
            }
            
        }

    }
    public static void displaySomething(){
        System.out.println("Login Successfully");
    }
}
