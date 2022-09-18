function contamination(text, char){

  return text.split('').map(e => text.length > 0 ? char : '').join('')                           

}
