//Consecutive segments
consecutive = (arr) => {
  // All sequences
  const seqs = []
// A single sequnce
  let seq = [arr[0]]

  count = 0
// When we've checked everything in the array
  while (count < arr.length) {
 
    if (arr[count+1] - arr[count] === 1) {
      seq.push(arr[count + 1])
    } else {
      seqs.push(seq)
      seq = [arr[count + 1]]
    }

    count++
  }
  return seqs
}

console.log(consecutive([1,2,3,6,7,8,15,18,19,21,22,24])) //[[1,2,3],[6,7,8],[15],[18,19],[21,22],[24]]