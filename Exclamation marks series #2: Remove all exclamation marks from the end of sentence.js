/*Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"*/

function remove(s) {
    while (s && s.slice(-1) == '!') {
        s = s.slice(0, -1);
    }
    return s;
}

function remove(s) {
    return s.charAt(s.length - 1) === '!' ? remove(s.slice(0, s.length - 1)): s;
}