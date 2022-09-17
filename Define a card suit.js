function defineSuit(card) {

  return {

    '♣' : 'clubs',

    '♦' : 'diamonds',

    '♥' : 'hearts',

    '♠' : 'spades'

  }[card.slice(-1)]

}
