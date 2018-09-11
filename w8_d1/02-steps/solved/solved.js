function steps(n) {
  var spaces = n-1;
  var counter = 0;

  for (var i = 1 ; i < n +1 ; i++) {
    var str = "";
    str += "#".repeat(i)
    str+= " ".repeat(spaces)
    spaces--
    console.log(str)
  }

}

steps(4)