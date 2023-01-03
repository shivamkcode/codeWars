/*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]*/

function generateParanth(n){
    let arr = []
    const isValid = s =>{
        let str = s.trim().split('');
        let temp = []
        for(let i of str){
            if(i === '('){
                temp.push(i)
            }
            if(i === ')'){
                if(temp.pop() !== '(') return false
            }
        }return temp.length > 0 ? false : arr.push(s)
    }
    for(let i = 0; i < n; i++){
        
    }

const generateParentheses = n => {
  const result = [];
  breathFirstSearch("", 0, 0);
  return result;
  function breathFirstSearch(str, left, right) {
    if (left === n && right === n) {
      result.push(str);
      return;
    }
    if (left !== n) {
      breathFirstSearch(str + "(", left + 1, right);
    }
    if (left > right) {
      breathFirstSearch(str + ")", left, right + 1);
    }
  }
}
console.log(generateParentheses(2))