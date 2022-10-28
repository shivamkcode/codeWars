//Return the type of the sum of the two arguments

const typeOfSum = (a, b) => typeof(a + b);

function typeOfSum(a, b) {
    return typeof (a+b) === 'number' ? 'number': 'string';
}