
function coolness(data, id) {
  var coolnessPts = 0;
  var subId; 

  // Grabs all necessary info for generations in question
  for (var i = 0 ; i < data.length ; i++ ) {
    if (data[i][0] === id) {
      coolnessPts+=data[i][1]
      subId = data[2]
    }
  }

  for (var i = 0 ; i < subId.length; i++) {

    for(var j = 0 ; j < data.length; j++) {
      if (data[j][0] === subId[i]) {

        coolnessPts+=data[j][1]
      }
    }

  }

  return coolnessPts;

}

console.log(coolness([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1))