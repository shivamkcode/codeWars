/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false*/

var isValid = function(s) {
    if (s.length % 2 !== 0 ) return false;
    let str = s.trim().split('');
    let temp = [];
    for(let i of str){
        if(i == '(' || i=='{' || i=='['){
            temp.push(i);
        }
        if(i==')'){
            if(temp.pop() != '(') return false;
        }
        if(i=='}'){
            if(temp.pop() != '{') return false;
        }
        if(i==']'){
            if(temp.pop() != '[') return false;
        }
    };
    return temp.length > 0 ? false: true;
};

console.log(isValid('((())())'))