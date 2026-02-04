//Write a program for bankaccount to know the balance after depositing 
//and withdrawing the amount and also having the loan account facilitiy
// to calculate the emi and monthly emi's will be paid by customer using 
// either by card or cash
import java.util.Scanner;
public class BankAccount {

    String name;
    int accountNo;
    private double balance;

    public void deposit(int amount)
    {
        if(amount>0){
            balance += amount;
        }
    }
     public void withdraw(int amount)
    {
        if(amount<=balance){
            balance -= amount;
        }
        else{
            System.out.println("not enough balance in your account.");
        }
    }
    public void displayinfo(String name,int accountNo)
    {
        System.out.println("the balance in account number "+accountNo+" with name "+name+" is :");
    }
    public double getbalance(){
        return balance;
    }
}

class Loan extends BankAccount{
    private double loanAmount;
    public Loan(double loan) {
        loanAmount = loan;
    }

    public double calculateEMI() {
        return loanAmount / 12;
    }
    public void payEMI(String mode) {
        System.out.println("EMI paid using " + mode);
    }


}
class Main {

    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            BankAccount a = new BankAccount();

            System.out.println("enter your name: ");
            a.name = sc.nextLine();
            System.out.println("enter your account no: ");
            a.accountNo = sc.nextInt();
            System.out.println("enter the amount to be deposited: ");
            int amount= sc.nextInt();
            System.out.println("enter the amount to be withdrawn: ");
            int withdraw = sc.nextInt();

            a.displayinfo(a.name,a.accountNo);
            a.deposit(amount);
            a.withdraw(withdraw);
            System.out.println(a.getbalance());

            System.out.println("enter the amount you want to take loan: ");
            int loanAmount = sc.nextInt();
            Loan loan = new Loan(loanAmount);
            if(loanAmount<= 4*a.getbalance())
            {
                double emi = loan.calculateEMI();

            System.out.println("Monthly EMI: " + emi);

            System.out.print("Enter payment mode (Cash/Card): ");
            String mode = sc.next();

            loan.payEMI(mode);
            }
            else{
                System.out.println("you are not eligible to take "+loanAmount+" as loan.Sorry.");
            }
        }  
    }
}
    
    


