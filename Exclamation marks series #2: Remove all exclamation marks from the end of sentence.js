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

