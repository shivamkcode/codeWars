function squareDigits(num){

  return Number(num.toString().split('').map(e =>e*e).join(''))

}


//Every digit in the given number should be squared
