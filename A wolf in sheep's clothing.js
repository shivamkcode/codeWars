function warnTheSheep(queue) {

  let wolf = queue.indexOf('wolf')

  let sheep = queue.length - wolf - 1

   return wolf === (queue.length -1) ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`

}
