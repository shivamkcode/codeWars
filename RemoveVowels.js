function shortcut (string) {

  let vowels = 'aeiou'

  return string.split('').filter(el => !vowels.includes(el)).join('')

}
