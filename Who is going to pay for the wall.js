function whoIsPaying(name){

  

  let sp = name.split('').splice(0,2).join('')

   

    

    return name.length > 2 ? [name,sp] : [name]

}

