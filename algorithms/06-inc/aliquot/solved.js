// Return Aliquot sequence
// ALiquot sequence return sum of all divisible numbers until we hit one.

aliquout = (n) => {
  const seq = [];
  
  while (n > 0) {
    var sum = 0
    for (let i = 1 ; i < n ; i++) {
      if (n%i === 0) {
        sum+=i
      }
    }
    seq.push(sum)
    n = sum
  }
  
  return seq
  
  }
  
  console.log(aliquout(10))