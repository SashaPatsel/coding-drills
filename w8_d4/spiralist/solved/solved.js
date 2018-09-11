function spiralist(n) {
  var final = [];

  for (var i = 0 ; i < n ; i++) {
    final.push([])
  }

  var counter = 1;
// Keep track of columns
  var sc = 0;
  var ec = n;

  // Keep track of rows
  var sr = 0;
  var er = n;

  while (sc <= ec && sr <= er) {

    for (var i = sc ; i < ec ; i++) {
      final[sc][i] = counter;
      counter++;
    }
    //Increment Starting row
    sr++;

    for (var i = sr ; i < er  ; i++) {
      final[i][ec - 1] = counter;
      counter++;
    }
   //Decrement end column
    ec--

    for (var i = ec - 1 ; i >= sc ; i--) {
      final[er - 1][i] = counter;
      counter++;
    }
    // Decrement end row
    er--
 
    for (var i = er - 1 ; i >= sr ; i--) {
      final[i][sc] = counter;
      counter++ 
    }

    // Decrement start column
    sc++
    
  }
  return final
}

console.log(0, spiralist(0))

console.log(1, spiralist(1))

console.log(2, spiralist(2))

console.log(3, spiralist(3))


console.log(9, spiralist(9))