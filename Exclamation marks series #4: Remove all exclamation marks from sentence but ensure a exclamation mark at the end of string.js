/*Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"*/

function remove (string) {
    //coding and coding....
    let str = string.split('')
    let arr = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '!') {
            arr.push(str[i])
        }
    }
}

const remove = s => s.split("!").join("") + "!";