//Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function() {

    let digit = '0123456789'.split('')
    return digit.includes(this.toString())
};