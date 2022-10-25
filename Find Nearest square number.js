/*Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)*/

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

function nearestSq(n){
    return Math.round(n**0.5)**2
}

