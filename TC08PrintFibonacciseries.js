//Program to print Fibonacci series up to n terms

function printFibonacci(n) {
    var first = 0, second = 1, next;
    for(var i = 1; i <= n; i++) {
        if(i === 1) {
            console.log(first);
        }
        else if(i === 2) {
            console.log(second);
        }
        else {
            next = first + second;
            console.log(next);
            first = second;
            second = next;
        }
    }
}
printFibonacci(10);