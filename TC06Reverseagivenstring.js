//Program to reverse a given string
var str = "Hello World";
var reversedstr = "";
for(var i = str.length -1; i>= 0; i--) {
    reversedstr += str[i];
}
console.log("Reversed string: " + reversedstr);
