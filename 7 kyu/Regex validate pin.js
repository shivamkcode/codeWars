/*ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false*/

function validatePIN (pin) {
    let num = '1234567890'.split('')
    if (pin.split('').filter(x => num.includes(x)).length === pin.length) {
        return Math.floor(pin) == +pin && (pin.split('').length === 4 || pin.split('').length === 6)
    } else {
        return false
    }
}

function validatePIN (pin) {
    pin = pin.split('')
    const findNaN = pin.find(character => !(parseInt(character) >= 0))
    if ((pin.length === 4 || pin.length === 6) && !findNaN) {
        return true
    } else {
        return false
    }
}