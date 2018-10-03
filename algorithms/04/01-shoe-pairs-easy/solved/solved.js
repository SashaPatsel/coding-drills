const test = [1,2,1,3,2,4,2,3,3,1] // 3

function countPairs(arr) {
  const obj = {}
  let pairs = 0

  for (let i = 0 ; i < arr.length ; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = false
      pairs++
    } else {
      obj[arr[i]] = true
    }
  }

  return pairs

}

console.log(countPairs(test))