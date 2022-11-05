/*Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.*/

function amIWilson(p) {
    // "The only known Wilson primes are 5, 13 and 563."
    return p == 5 || p == 13 || p == 563
}

function amIWilson(p) {
    p = BigInt(p);
    const fac = n => n ? n * fac(n-1n): 1n;
    const d = (fac(p-1n) + 1n);
    return !(d % (p * p));
}

const amIWilson = num => (factorial(num - 1) + 1) / (num * num) % 1 === 0;

const factorial = x => x <= 1 ? 1 : x * factorial(x - 1);