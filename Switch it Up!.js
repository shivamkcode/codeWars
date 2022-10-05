/*When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.*/

function switchItUp(n){
//Write your own Code!
  return n == 1 ? 'One' :
  n == 2 ? 'Two' :
  n == 3 ? 'Three' :
  n == 4 ? 'Four' :
  n == 5 ? 'Five' :
  n == 6 ? 'Six' :
  n == 7 ? 'Seven' :
  n == 8 ? 'Eight' : 
  n == 9 ? 'Nine' : 'Zero'
}