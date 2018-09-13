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
    
        group.push(i,j-1)
        
        if (group[1]-group[0] >= 2 && !groups.includes(group)) {

              groups.push(group)

        }
      }

      if (str[i] !== str[j]) {
        counter = 0;
      }

    }
    

  }
  var final = [];
final.push(groups[0])
  for (var i = 0 ; i < groups.length; i++) {
    
    for (var j = 0 ; j < groups.length; j++) {
        if (groups[i][1]){

        }
    }
  }
 


  return groups

}

console.log(groups(input))