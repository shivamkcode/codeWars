var humanYearsCatYearsDogYears = function(humanYears) {
  let cat = humanYears === 1 ? 15 :
  humanYears === 2 ? 24 : 24 + (humanYears - 2) * 4
  let dog = humanYears === 1 ? 15 :
