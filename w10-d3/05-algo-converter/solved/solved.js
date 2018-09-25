// 1.

// ES5
function compressor1(str) {
  var newString = ""
  var obj = {}
  for (var i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++
    } else {
      obj[str[i]] = 1
    }
  }
  for (var i = 0; i < str.length; i++) {
    if (!(newString.includes(str[i]))) {
      newString+=(str[i]+obj[str[i]])
    } 
  }
  return newString
}
console.log(compressor1("hhhkkkkkkttttttttt"))
console.log(compressor1("hrkjqehvewqjhvheqvwjcgfwegiuf"))

// ES6
compressor = str => {
  let newString = ""
  const obj = {}
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++
    } else {
      obj[str[i]] = 1
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (!(newString.includes(str[i]))) {
      newString+=(str[i]+obj[str[i]])
    } 
  }
  return newString
}
console.log(compressor("hhhkkkkkkttttttttt"))
console.log(compressor("hrkjqehvewqjhvheqvwjcgfwegiuf"))



// 2. 

var array = ["predestined", "predetermined", "prescient", "preschool", "precious"]
var array2 = ["predestined", "predetermined"]
var array3 = ["prescient", "preschool"]

// ES5
function longestPrefix(arr) {
  var compare = arr[0].split("")
  var newstring = ""
  for (var i = 1 ; i < arr.length ; i++) {
    for (var j = 0 ; j < arr[i].length ; j++) {
      if (compare[j] !== arr[i][j] && compare[j]) {
      compare.splice(j)
      }
    }
  }
  compare = compare.join("")
  return compare
}

console.log(longestPrefix(array))
console.log(longestPrefix(array2))
console.log(longestPrefix(array3))


// ES6

longestPrefix1 = arr => {
  let compare = arr[0].split("")
  for (let i = 1 ; i < arr.length ; i++) {
    for (let j = 0 ; j < arr[i].length ; j++) {
      if (compare[j] !== arr[i][j] && compare[j]) {
      compare.splice(j)
      }
    }
  }
  compare = compare.join("")
  return compare
}

console.log(longestPrefix1(array))
console.log(longestPrefix1(array2))
console.log(longestPrefix1(array3))

