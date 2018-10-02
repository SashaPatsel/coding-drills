const test = [1,2,1,3,2,4,2,3,3,1] // 3

function countPairs(arr) {
  const obj = {}
  let pairs = 0

  for (let i = 0 ; i < arr.length ; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] ++
    } else {
      obj[arr[i]] = 1
    }
  }

  for (let p in obj) {
    if (p % 2 !== 0) {
      p--
    } else {
      pairs += p/2
    }
  }

  return pairs

}

console.log(countPairs(test))