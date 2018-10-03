const test = [1,2,3,4,5,6]
// Given 3: [4,5,6,1,2,3]


function rotate(arr, r) {
  const copy = [...arr]
  for (let i = 0 ; i < arr.length -r ; i++) {
    if (i < r) {
      arr[arr.length-(r-i)] = copy[i]
      arr[i] = copy[i + r]
    }
    else {
      arr[i] = copy[i + r]
    }
  }
  return arr
}

// console.log(rotate(test,3))


// OR 

rotate1 = (arr, r) => arr.slice(r, arr.length).concat(arr.slice(0,r))
  
console.log(rotate1(test,3))
console.log(test)
// If they finish too fast.... "But can you do it in place???"