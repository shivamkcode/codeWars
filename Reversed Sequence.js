//Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let arr = []
  for(let i = 1; i<=n; i++){
    if(i <= n){
      arr.unshift(i)
      }
    }
  return arr;
};

const reverseSeq = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};

const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

/*Array(n) creates an array with n number of empty spots. Ex: Array(5) gives you this: [ undefined, undefined, undefined, undefined, undefined ].
Then comes fill(0), the fill() method changes all elements in an array to a static value(MDN Web docs). Ex: Our array from the example above, after applying .fill(0) would be [0, 0, 0, 0, 0].
Finally .map takes each element of the array and runs a provided function on each element. Ex: [0, 0, 0, 0, 0].map( ( e, i ) => n-i ); equals to [5,4,3,2,1].*/

const reverseSeq = length => Array.from({length}, () => length--)