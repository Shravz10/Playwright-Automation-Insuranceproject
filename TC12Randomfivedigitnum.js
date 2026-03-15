
function generateRandomFiveDigitNumber() {
    return Math.floor(Math.random() * 90000) + 10000;
}

console.log(generateRandomFiveDigitNumber());

function printRandomFiveDigitNumber() {
  const num = Math.floor(10000 + Math.random() * 90000);
  console.log(num);
}
printRandomFiveDigitNumber();
printRandomFiveDigitNumber();
printRandomFiveDigitNumber();