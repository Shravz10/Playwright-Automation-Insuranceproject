//program to sotr an array of numbers in descending order
var arr = [9, 5, 2, 1, 10, 6];
arr.sort(function(a , b) {
    return b - a;
})
console.log("sorted array in descending order:", arr);
