var input = [ 
  [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] 
]

function skyline(arr) {
  
  var holderX = []

  for (var i = 0 ; i < arr.length ; i++) {
    
    var highestXInfo = []
    var highestX = arr[i][0]

    for (var j = 0 ; j < arr.length ; j++) {

      

      if (arr[i][j] >= highestX) {
        highestXInfo = []
        highestX = arr[i][j]
        highestXInfo.push(highestX, i, j)
      }

    } 
    
    holderX.push(highestXInfo)
    
  }

  console.log(holderX)

}

console.log(skyline(input))