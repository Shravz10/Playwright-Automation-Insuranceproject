//Program to count the number of vowels in a string

var str = "Good Morning";
var count = 0;
for(var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if(char === 'a' || char ==='e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
    }
}
console.log("Number of vowels in the string is: " + count);
