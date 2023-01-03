/*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]*/

function generateParanth(n){
    let arr = []
    function valid(s,l,r){
        if(l === n && r === n){
            arr.push(s)
            return
        }
        if(l !== n){
            valid(s + '(',l + 1,r)
        }
        if(l > r){
            valid(s + ')',l,r + 1)
        }
    }
    valid('',0,0)
    return arr
    }
console.log(generateParanth(100))