/*Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"*/

function remove (string) {
    let s = string.split('')
    s[s.length-1] === '!' ? s.pop(): s
    return s.join('')
}


function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1): s;
}