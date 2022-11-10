/*You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291*/

function uniTotal (string) {
    let sum = 0
    string.split('').forEach(x => sum += x.charCodeAt(0))
    return sum
}

const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);