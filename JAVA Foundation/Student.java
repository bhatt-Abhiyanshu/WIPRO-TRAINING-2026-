public class Student {  // class is a blueprint that contains  variables/properties/attributes and methods 

    int id;
    String name;
    int[] marks;

    // constructor is non - parmaterized
    public Student()
    {


    }
    
    public Student(int ids , String names , int[] markss) // local variables
    {
        this.id = ids;  // this keyword is used to access the class variable
        this.name = names;
        this.marks = markss;

    }

    public void displayInfo()
    {
        System.err.println("Student Id : "+ id);
         System.err.println("Student Name : "+ name);
          System.err.println("Student Marks : ");

          for (int mark : marks)
          {

            System.out.println(mark +  " ");
          }
            System.out.println("\n..");
    }
}
