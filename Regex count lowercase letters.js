/*Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz*/

function lowercaseCount(str) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let count = 0
    str.split('').forEach(x => lower.includes(x) ? count++: count)
    return count
}

function lowercaseCount(str) {
    return (str.match(/[a-z]/g) || []).length
}