var input = [
  ["x","x","x","o","x"],
  ["o","o","o","o","x"],
  ["o","o","o","o","x"]
]

function battleShips(mtx) {

  var coordinates = []

  var ships = []


  for (var i = 0 ; i < mtx.length ; i++) {
    for (var j = 0 ; j < mtx[i].length ; j++) {
      var parts = []

      if (mtx[i][j] === "x") {
        coordinates.push([i,j])
      }

      // if (mtx[i][j + 1] === "x") {

      // }

    }
  }


  // for (var i = 0 ; i < coordinates.length ; i++) {
  //   var ship = []
    
  //   for (var j = 0 ; j < coordinates.length ; j++) {
  //     console.log(coordinates[i][1] + 1)
  //     // if (coordinates[i][0] === coordinates[j][0] && coordinates[i][1] + 1 === coordinates[j][1] ||coordinates[i][0] === coordinates[j][0] && coordinates[i][1] - 1 === coordinates[j][1]) {
  //     //   ship.push([coordinates[j][0], coordinates[j][1]])
  //     // }

      
  //   }
  //   ships.push(ship)
  // }

  console.log(input)
  console.log(coordinates)
  return ships.length
} 

console.log(battleShips(input))
