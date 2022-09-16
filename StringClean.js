function stringClean(s){

  return s.split('').filter(i => !'1234567890'.includes(i)).join('')                       

}
