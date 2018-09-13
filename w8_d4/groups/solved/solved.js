var input = "aabbbccdddddeefggggg"

function groups(str) {

  var groups = []

  for (var i = 0 ; i < str.length ; i++) {
    var counter = 0;
    var group = []
    for (var j = 0 ; j < str.length + 1; j++) {
     
      if (str[i] === str[j]) {
        counter++
        
      }
      
      if (str[i] !== str[j] && str[i] === str[j-1]) {
        var indices = [];
        for (var k = 0 ; k < groups.length ; k++) {
          indices.push(groups[k][1])
        }
        if (!indices.includes(j-1)) {
          group.push(i,j-1)
        }
        
        
        if (group[1]-group[0] >= 2 && !groups.includes(group)) {

              groups.push(group)

        }
      }

      if (str[i] !== str[j]) {
        counter = 0;
      }

    }
    

  }

 


  return groups

}

console.log(groups(input))