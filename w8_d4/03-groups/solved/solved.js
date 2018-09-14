var input = "aabbbccdddddeefggggg"

function groups(str) {
// The final array
  var groups = []

  for (var i = 0 ; i < str.length ; i++) {
    // Use this to check consecutive characters
    var counter = 0;
    // Keep track of the indices of consecutive characters
    var group = []
    // Compare current char against the others
    for (var j = 0 ; j < str.length + 1; j++) {
  //  increment  the counter for consecutive characters
      if (str[i] === str[j]) {
        counter++
        
      }
      // Checks the end of a match
      if (str[i] !== str[j] && str[i] === str[j-1]) {
        // Ensures we only get the first to last index, not those in between
        var indices = [];
        for (var k = 0 ; k < groups.length ; k++) {
          indices.push(groups[k][1])
        }
        // No duplicate entries
        if (!indices.includes(j-1)) {
          group.push(i,j-1)
        }
        
        // Makes sure the group is larger than 3
        if (group[1]-group[0] >= 2 && !groups.includes(group)) {

              groups.push(group)

        }
      }
      // reset the counter
      if (str[i] !== str[j]) {
        counter = 0;
      }

    }
    

  }

 


  return groups

}

console.log(groups(input))