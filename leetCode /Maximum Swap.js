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
    let arr = []
    let str = String(num).split('')
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[j] > str[i]) {
                let s = str,
                r = s[i]
                s[i] = s[j]
                s[j] = r
                arr.push(s)
            }
        }
    }
    return arr.length > 1 ? +(arr[0].join('')) : nu
}

console.log(maximumSwap(9973))