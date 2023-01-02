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

console.log(isValid('([{}][])'))