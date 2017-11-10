function randomPassword(length)
{
  chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*-_";
  pass = "";
  for(x=0;x<length;x++)
  {
    i = Math.floor(Math.random() * 62);
    pass += chars.charAt(i);
  }
  return pass;
}
function formSubmit()
{
  passform.passbox.value = randomPassword(passform.length.value);
  return false;
}
/*
import java.util.ArrayList;
import java.util.Arrays;

public class AssignList{
  public static void main(String[] args){
    System.out.println(Arrays.toString(args));

    String arg = args[0];
    String[] argsArray = arg.split("");
    int[] intArray = new int[argsArray.length];
    for (int 1 = 0;i<intArray.length;i++){
      intArray[i] = Integer.parseInt(argsArray[i]);
    }
  }
}
*/