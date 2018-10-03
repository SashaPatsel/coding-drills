const test = "aabbcc" //true
const test1 = "aaabbcc" //true
const test2 = "aabbcccc" //false
const test3 = "aa" //true
const test4 = "aaabbccc" //false
const test5 = "aaabbbbcccdddd" //false


function conform(str) {
  // Track the number of appearances for each character in the string with an object
  const obj = {}
  for (let i = 0 ; i < str.length ; i++) {
    if (obj[str[i]]) {
      obj[str[i]] ++
    } else {
      obj[str[i]] = 1
    }
  }

  // initialize to first chars appearances
  let appearances = obj[str[0]];
  // Keep track of our only allowed deletion
  let deletion = false;

  // Iterate through each key in the object to compare the number of appearances
  for (let s in obj) {
    // If the difference is greater than 2, return false immediately
    if (Math.abs(appearances - obj[s]) > 1 ) {
      return false
    }
    // if the appearances aren't equal and we havent used our deletion
    if (obj[s] !== appearances && !deletion) {
      // make it so we know our deletion has been used
      deletion = true;
      if (appearances > obj[s]) {
        appearances--
      } else if (obj[s] > appearances) {
        obj[s]--
      }
      
    }
    // If there's a difference in appearances and we've already used our deletion, return false
    if (Math.abs(appearances - obj[s]) === 1 && deletion) {
      return false
    } 
  }

  return true
}

console.log(conform(test))
console.log(conform(test1))
console.log(conform(test2))
console.log(conform(test3))
console.log(conform(test4))
console.log(conform(test5))