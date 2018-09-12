var input = [ 
  [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] 
]

function skyline(arr) {
  
  var holderX = []
  var holderY = []

  for (var i = 0 ; i < arr.length ; i++) {
    
    var highestXInfo = []
    var highestX = arr[i][0]

    var highestYInfo = []
    var highestY = arr[0][i]

    for (var j = 0 ; j < arr.length ; j++) {

   

      if (arr[i][j] >= highestX) {
        highestXInfo = []
        highestX = arr[i][j]
        highestXInfo.push(highestX, i, j)
      }

      if (arr[j][i] >= highestY) {
        highestYInfo = []
        highestY = arr[j][i]
        highestYInfo.push(highestY, i, j)


      }

    } 
    
    holderX.push(highestXInfo)
    holderY.push(highestYInfo)
  }

  console.log("X",holderX)
  console.log("Y",holderY)
  

}

console.log(skyline(input))