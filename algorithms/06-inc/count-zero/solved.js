// Count number of zeros encountered counting up to n

function countZero(n){
  var count = 0;
  while(n>0){
   count += Math.floor(n/10);
   n = n/10;
  }
  return count;
}
console.log(countZero(110))
console.log(countZero(553))
console.log(countZero(100))
