//Program to check whether a given number is a prime number or not
var num = 7;
var isPrime = true;
if(num <= 1) {
    isPrime = false;
} else {
    for(var i=2; i <= Math.sqrt(num); i++) {
        if(num % i == 0) {
            isPrime = false;
            break;
        }
        
    }
}

console.log(num + " is " + (isPrime ? "a prime number" : "not a prime number"));