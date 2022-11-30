
var capitals = function (word) {
    let arr = []
    let al = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    word.split('').forEach((x, i) => al.includes(x) ? arr.push(i): i)
    return arr
};