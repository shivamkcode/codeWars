/*You are given an integer num. You can swap two digits at most once to get the maximum valued number.

Return the maximum valued number you can get.

Example 1:

Input: num = 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:

Input: num = 9973
Output: 9973
Explanation: No swap.*/

function maximumSwap(num) {
    num = String(num).split('')
    let arr = num.slice()
    arr.sort((a, b) => b-a)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num[i]) {
            let a = num.lastIndexOf(arr[i]);
            [num[a],num[i]] = [num[i],num[a]]
            break;
        }
    }
    return +num.join('')
}

console.log(maximumSwap(27369))