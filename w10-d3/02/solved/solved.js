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


// 3. 
// ES5
function addStrings(str1, str2) {
  return str1 + str2
}

// ES6
addStrings1 = (str1, str2) => str1 + str2

console.log(addStrings("hello", " there"))

console.log(addStrings1("hello", " there"))

// 4. 
// Given this function...
function doStuff(arg1, arg2, callback) {
  callback(arg1, arg2)
}

// In one line of code, invoke the above function, passing in two numbers and an anonymous function which returns their added value.
doStuff(3,3, (num, num) => num + num)


// 5. 
// ES5
function madLibs(occupation, transportVerb, adverb, adjective, animal, presentTenseVerb, adjective2) {
"The "+occupation+" "+transportVerb+" on his/her way to the church very "+adverb+". The surrounding crowd could not believe he/she would do so on such a/an "+adjective+" day. Meanwhile, across the street, an "+animal+" was "+presentTenseVerb+". It was truly a/an "+ adjective2 +" sight to see"
}

// ES6

madlibs = (occupation, transportVerb, adverb, adjective, animal, presentTenseVerb, adjective2) => {
  `The ${occupation} ${transportVerb} on his/her way to the church very ${adverb}. The surrounding crowd could not believe he/she would do so on such a/an ${adjective} day. Meanwhile, across the street, an ${animal} was ${presentTenseVerb}. It was truly a/an ${adjective2} sight to see`
}

// Have fun making your own test on this one 😈.