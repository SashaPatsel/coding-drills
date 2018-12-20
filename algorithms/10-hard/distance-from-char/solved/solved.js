  var string = "ilovetowritecode";
  var character = "o"

  // This solution contains three main steps:
  // 1. Grab a hold of the index for each instance of the given character in the given string.
  // 2. Create an array for every single character in the given string. Each array will contain the distance between that character, and EVERY instance of the given character.
  // 3. Once we have the distance between each character and the given character, we can grab the smallest of those values and send them to the final array that we'll return.
  
  function distanceFrom(str, char) {
    // An array containing the indices, in order, of every instance of the given character.
    var indices = []
    
    // Our final result that will ultimately be returned.
    var final = []

    for (var i = 0 ; i < str.length ; i ++) {
      if (str[i] === char) {
        //Send all the target characters' indices to a single array
        indices.push(i)
      }
    }

    // Will hold an array for each character. Each array will contain the distance that character is from every instance of the given character.
    var hold = []

    // For every character in the string, determine it's distance from each instance of the given character
    for (var i = 0 ; i < str.length ; i ++) {
      // One of the arrays that will be passed to hold
      var temp = []

      for (var j = 0 ; j < indices.length ; j++) {
        // The distance of each character from the given character
        var distance = i - indices[j]
        // We do not want any negative values
        temp.push(Math.abs(distance))

      }
      // Send the distance of each character to one holder array
      hold.push(temp)
    }

    // Check each array from hold in turn so we can grab the smallest value. The smallest value is equal to the distance from the nearest given character.
    for (var i = 0 ; i < hold.length ; i++) {
      //Max distance an element can be
      var index = str.length;
      // Check each element in each array to grab the smallest.
      for (var j = 0 ; j < hold[i].length ; j++) {
        if (hold[i][j] < index) {
          index = hold[i][j]
        }
      }
      // Pushing the final results to the array we will return.
      final.push(index)
    }

    return final
  }
  
  // TEST, should return: [2,1,0,1,2,1,0,1,2,3,3,2,1,0,1,2]
  console.log(distanceFrom(string, character))
