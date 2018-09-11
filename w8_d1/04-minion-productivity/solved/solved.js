
function productivity(data, id) {
  var productivityPts = 0;
  var subId; 

  // Grabs all necessary info for minion in question
  for (var i = 0 ; i < data.length ; i++ ) {
    if (data[i][0] === id) {
      productivityPts+=data[i][1]
      subId = data[i][2]
    }
  }

  // Finds the subordinates of the minions
  for (var i = 0 ; i < subId.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (data[j][0] === subId[i]){
        productivityPts+=data[j][1]
        // Add the subordinate of the current minion to the list of subordinates to evaluate. This also changes the length of the array, thus extending the iteration until we've finished looking at all the subordinates.
        subId.concat(data[j][2])
      }
    }
  }

  return productivityPts;

}

// Should be 11
console.log(productivity([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1))

// Should be 5
console.log(productivity([[1, 4, [2]], [2, 1, [3, 4]], [3, 2, [5]], [4, 2, []], [5, 1,[]]], 2))

// Should be 1
console.log(productivity([[1, 7, []], [2, 6, []], [3, 1, []]], 3))