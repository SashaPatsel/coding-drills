function fib(n) {
  var arr = [0, 1, 1]

  for (var i = 2 ; i < n ; i++) {
    arr.push(arr[i - 1] + arr[i])
  }

  return arr[n]
}

function fib1(n) {
  if (n < 2) {
    // When we call this recursively we'll get the sum of n reaching 1 (i.e. < 2) from every iteration of this recursive call
    return n;
  }
  //Fib gets called 2 every time it is called once 🤯 
  return fib1(n - 1) + fib1(n - 2);
}

console.log(fib(7))
console.log(fib(0))

console.log(fib1(7))
console.log(fib1(0))