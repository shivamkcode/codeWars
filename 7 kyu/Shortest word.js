/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

function findShort(s) {
    let arr = s.split(' ')
    let l = arr[0].length

    for (let i = 0; i < arr.length; i++) {
        if (l > arr[i].length) {
            l = arr[i].length
        } else {
            l
        }
    }
    return l
}

function findShort(s){
  return s.split(' ').sort((a,b) => a.length - b.length)[0].length;
}