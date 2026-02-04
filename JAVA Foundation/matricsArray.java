import java.util.Scanner;
public class matricsArray {
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the no. of rows for matrics 1");
        int row1 = sc.nextInt();
        System.out.println("enter the no. of coloumns for matrics 1");
        int col1 = sc.nextInt();
        int[][] mat1 = new int[row1][col1];
        for(int i = 0;i<row1;i++)
        {
            for(int j=0;j<col1;j++){
                System.out.println("enter the value for"+(i+1)+"row and"+(j+1)+"coloumn\t");
                mat1[i][j] = sc.nextInt();
            }

        }
        System.out.println("enter the no. of rows for matrics 2");
        int row2 = sc.nextInt();
        System.out.println("enter the no. of coloumns for matrics 2");
        int col2 = sc.nextInt();
        int[][] mat2 = new int[row2][col2];
        for(int i = 0;i<row2;i++){
            for(int j=0;j<col2;j++){
                System.out.println("enter the value for"+(i+1)+"row and"+(j+1)+"coloumn\t");
                mat2[i][j] = sc.nextInt();
            }

        }
        
       
        int[] arr = new int[row1*col1];
        if(row1==row2 & col1==col2){
             int index = 0;
            for (int i = 0; i < row1; i++) {
                for (int j = 0; j < col1; j++) {
                    arr[index++] = mat1[i][j] + mat2[i][j];
            }
        }
    }
      System.out.println("\nArray Result:");
        for (int val : arr) {
            System.out.print(val + " ");
        }
    sc.close();
    }
}
