// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b; 
}

function divide(a, b) {
    if (b == 0) {
        return 'invalid'; 
    } else {
        return a / b;
    }
}

function mod(a, b) {
    return a % b;
}

function exponent(a, b) {
    return Math.pow(a, b);
}

function subt(a, b) {
    return a - b;
}

console.log(add(5, 3));      
console.log(multiply(5, 3));   
console.log(divide(6, 2));     
console.log(divide(6, 0));       
console.log(exponent(2, 3));    
console.log(subt(5, 3));        
