/*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]*/

function generateParanth(n){
    let arr = []
    const isValid = str =>{
        let temp = []
        for(let i of str){
            if(i === '('){
                temp.push(i)
            }
            if(i === ')'){
                if(temp.pop() !== '(') return false
            }
            return temp.length > 0 ? false : true
        }
    }
    /*for(let i = 0; i < n; i++){
        
    }*/
    }
console.log(generateParanth('()()()'))