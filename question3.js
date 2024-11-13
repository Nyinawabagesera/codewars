// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

number = [1,2,3,4,5,6,7,8,9,10]

const getEvenNumbers = number.filter(num => num%2 ===0 )

console.log(getEvenNumbers)