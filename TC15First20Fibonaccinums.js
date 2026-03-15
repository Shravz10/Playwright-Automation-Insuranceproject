// Generate the first 20 Fibonacci numbers
function printFirst20Fibonacci() {
    let a = 0, b = 1;
    console.log(a);
    console.log(b);
    for (let i = 2; i < 20; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
printFirst20Fibonacci();



function printFirst20Fibonacci() {
  let a = 0;
  let b = 1;

  for (let i = 1; i <= 20; i++) {
    console.log(a);
    const next = a + b;
    a = b;
    b = next;
  }
}
