/*Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

number	price (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
*/

function saleHotdogs(n){
  return n < 5 ? n*100 :
  n < 10 ? n*95 : n*90
}

const saleHotdogs = (n) => {
  switch (true) {
    case n < 5: return n * 100;
    case n < 10: return n * 95;
    default: return n * 90;
  }
}