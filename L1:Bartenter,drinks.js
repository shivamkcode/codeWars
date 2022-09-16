function getDrinkByProfession(str){
    let strr = str.toLowerCase()
    let input = ["jabroni", "school counselor", "programmer", "bike gang member", "politician", "rapper"]
    let output = ["Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal"]
    for( let i = 0; i < input.length; i++){
      if(strr == input[i]){
        return output[i]
        }
    }return "Beer"
}
