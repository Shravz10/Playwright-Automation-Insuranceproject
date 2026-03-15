// This function generates a random US mobile number in the format (XXX) XXX-XXXX

function generateRandomUSMobileNumber() {
    const areaCode = Math.floor(Math.random() * 900) + 100; // Area code between 100 and 999
    const centralOfficeCode = Math.floor(Math.random() * 900) + 100; // Central office code between 100 and 999
    const lineNumber = Math.floor(Math.random() * 10000); // Line number between 0000 and 9999
    return `(${areaCode}) ${centralOfficeCode}-${lineNumber.toString().padStart(4, '0')}`;
}
 
console.log(generateRandomUSMobileNumber());
console.log(generateRandomUSMobileNumber());
console.log(generateRandomUSMobileNumber());














