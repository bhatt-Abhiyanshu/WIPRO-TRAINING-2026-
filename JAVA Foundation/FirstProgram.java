public class FirstProgram {

    public static void main(String[] args) {
        int count = 0;
        String s = "here is my first program";
        s.toLowerCase();
        String[] a = s.split(" ");
        System.out.println("total words ; "+ a.length);
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='a'||s.charAt(i)=='e'||s.charAt(i)=='i'||s.charAt(i)=='o'||s.charAt(i)=='u'){
                count ++;
            }
            System.out.println("the character at "+i+" index is "+s.charAt(i));
        }
        System.out.println("no. of vowels is : "+count);
       
    }
}