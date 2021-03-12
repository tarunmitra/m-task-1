function myFunction(){

 //var mark = prompt("Enter your mark to check your later grade : ");
 var mark = parseInt(prompt("Enter your mark to check your later grade : "));
 if(mark >= 80){
   document.write("Your Grade is A+");
 }else if(mark >= 70){
   document.write("Your Grade is A");
 }else if(mark >= 60){
   document.write("Your Grade is A-");
 }else if(mark >= 50){
   document.write("Your Grade is B");
 }else if(mark >= 40){
   document.write("Your Grade is C");
 }else if(mark >= 33){
   document.write("Your Grade is D");
 }else{
  document.write("Fail");
 }
//console.log(typeof mark);
}


