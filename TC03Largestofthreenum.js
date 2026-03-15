//Program to find the largest of three numbers
var num1 = 10;
var num2 = 20;
var num3 = 15;
if(num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest number");
} else if(num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the largest number");

} else {
    console.log(num3 + " is the largest number");
}