
// (O)n
function fibonacci(n) {

  var nums = [0, 1]

  var fib = 0

  for (var i = 0; i <= n - 2; i++) {
    nums.push(nums[i] + nums[i + 1])
  }

  return nums[n]
}

console.log(fibonacci(9))
console.log(fibonacci(0))

// Recursive, (O)2^n. You are calling this function two additional timed for every recursive call. That means exponential growth.

function fib(n) {

  if (n < 2) {
    return n
  }

  return fib(n-1) + fib(n-2)

}

console.log(fib(9))
console.log(fib(6))
console.log(fib(3))
console.log(fib(0))


console.log(["boxer", "blood hound", "cocker spaniel", "golden retriever", "poodle", "pit bull", "bull dog", "labrador", "doberman", "viszla", "german shepherd", "australian shepherd", "border collie", "pug"].sort())

// memoization: check to see if the function has already been called with that argument.