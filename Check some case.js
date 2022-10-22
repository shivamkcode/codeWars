/*Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1*/

function sameCase(a, b) {
    let small = 'abcdefghijklmnopqrstuvwxyz'
    let caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return !small.includes(a) && !caps.includes(a) || !small.includes(b) && !caps.includes(b) ? -1:
    small.includes(a) && small.includes(b) ? 1:
    caps.includes(a) && caps.includes(b) ? 1: 0
}