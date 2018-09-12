var input = [ 
  [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] 
]

var input2 = [ 
  [23, 55, 28, 14], 
  [12, 64, 55, 67],
  [65, 32, 26, 53],
  [70, 36, 61, 80] 
]

function skyline(arr) {
  
  var holderX = []
  var holderY = []

  var sum = 0;

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


  for (var i = 0 ; i < arr.length ; i ++) {

    for (var j = 0 ; j < arr.length ; j ++) {
      
      var tallest = [arr[i][j]]
      // After getting the tallest for each row and column, we can now compare each element against those values. 
      for (var x = 0 ; x < holderX.length ; x++) {
        for (var y = 0 ; y < holderX.length ; y++) {

          if (i === holderX[x][1] && j === holderY[y][1]) {
          
            tallest.push(holderX[x][0], holderY[y][0])

          }
        }
      }



      if (tallest.length === 3 && tallest[0] < tallest[1] && tallest[0] < tallest[2]) {

        var smaller = tallest[1]
        
        if (tallest[2] <= smaller) {
          smaller = tallest[2]
        }
        
        var newHeight = smaller - 1
        
        sum += (newHeight - arr[i][j] )
      }

    }

  }
  return sum

}

console.log(skyline(input)) //35
console.log(skyline(input2)) // 268