My solution

function repeatStr (n, s) {

return s.repeat(n);

}

Others

repeatStr = (n, s) => s.repeat(n)

function repeatStr (n, s) {

var str="";

for(var i=0; i < n; i++)

str+=s;

return str;

}

function repeatStr (n, s) {

return n > 1 ? s + repeatStr(--n, s) : s;

}

function repeatStr (n, s) {

var myString = '';

while(n > 0) {

myString += s;

n--;

}

return myString;

}
