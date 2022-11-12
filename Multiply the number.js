/*Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹*/

function multiply(number) {
    let l = number > 0 ? String(number).length: String(number).length -1
    return number * (5**l)
}

function multiply(number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
}

function multiply(number) {
    //your code here
    let numStr = number.toString().replace("-", "");
    return number* Math.pow(5, numStr.length)
}