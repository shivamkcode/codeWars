let polishLetters = {

    "ą": "a",

    "ć": "c",

    "ę": "e",

    "ł": "l",

    "ń": "n",

    "ó": "o",

    "ś": "s",

    "ź": "z",

    "ż": "z",

};
function correctPolish(str){
  return polishLetters.split('').map(e=> polishLetters[e] || e).join('')                



}
