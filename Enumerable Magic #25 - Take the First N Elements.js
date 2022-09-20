function take(arr, n) {

  let newArr = []

  for(let i=0; i<arr.length; i++){

    if(i < n){

     newArr.push(arr[i])

    }}

  return newArr

}
/*const take = (arr,n) => arr.slice(0,n}*/
