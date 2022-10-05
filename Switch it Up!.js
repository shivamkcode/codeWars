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

switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

function switchItUp(number){
  switch(number) {
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return  'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      return 'Unknown number';
  }
}