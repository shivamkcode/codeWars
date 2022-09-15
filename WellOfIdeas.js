const well = x =>{
  const count = x.filter(x => x === 'good').length
  return count < 1 : count < 3 ? 'Publish!' ; 'I smell a series!' : 'Fail!'}
