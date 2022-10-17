/*Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"*/

function replace(s) {
    //coding and coding....
    let vowels = 'AEIOUaeiou'
    return s.split('').map(x => vowels.includes(x) ? '!': x).join('')
}

function replace(s) {
  let sArr = s.split('');
  
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'a' ||
        s[i] === 'e' ||
        s[i] === 'i' ||
        s[i] === 'o' ||
        s[i] === 'u' ||
        s[i] === 'A' ||
        s[i] === 'E' ||
        s[i] === 'I' ||
        s[i] === 'O' ||
        s[i] === 'U') {
      sArr[i] = '!';
    }
  }
  return sArr.join('');
}