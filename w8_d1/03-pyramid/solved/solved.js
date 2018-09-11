function pyramid(n) {
  var spaces = n - 1;
  var counter = 1;

  for (var i = 1 ; i < n + 1 ; i++) {
    str = ""
    str+= " ".repeat(spaces)
    str+="#".repeat(counter)
    str+= " ".repeat(spaces)
    console.log("'",str,"'")
    spaces--
    counter+=2
  }

}

pyramid(8)

