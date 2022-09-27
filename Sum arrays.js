//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum (numbers) {
    "use strict";
  let sum = 0
    if(numbers.length < 1){
      return sum
      }
    numbers.forEach(x => sum += x)
  return sum
};


function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

