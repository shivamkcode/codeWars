//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.

function findAverage(array) {
  // your code here
 let sum = 0
 array.forEach(x => sum += x)
  return array.length>0 ? sum/array.length : sum
}