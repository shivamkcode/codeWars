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

function maximumSwap(num){
    let arr = []
    let str = String(num).split('')
    for(let i = 0; i < str.length; i++){
        for(let j = 1; j < str.length; j++){
            let ar = [],
            s = str,
            r = s[i]
            if(str[j] > str[i]){
                s[i] = s[j]
                s[j] = r
                ar.push(s)
            }
            arr.push(+(ar.join('')))
        }
    }
    return arr
}

console.log(maximumSwap(937))