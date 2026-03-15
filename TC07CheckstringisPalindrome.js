//Program to check whether a given string is a palindrome or not
var str = "madam";
var reversedstr = "";
for(var i = str.length -1; i>= 0; i--) {
    reversedstr += str[i];
}
if(str === reversedstr) {
    console.log(str + " is a palindrome");
}
else {
    console.log(str + " is not a palindrome"); 
}
