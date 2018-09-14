

function fibonacci(n) {

  var nums = [0,1]

  var fib = 0

  for (var i = 0 ; i <= n ; i++) {
    nums.push(nums[i] + nums[i + 1])
  }

  console.log(nums)
}

console.log(fibonacci(9))