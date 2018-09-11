var input = [9,4,3,6,8,2];
var input2 = [13,22,20,18,15,16];
var input3 = [0,2,3,4];
var input4 = [0,1,3];


function missing(arr) {
var high = arr[0];
var low = arr[0];
// Assigns the boundaries 
for (var i = 0 ; i < arr.length ; i++) {
  if (arr[i] > high) {
    high = arr[i];
  }

  if (arr[i] < low) {
    low = arr[i]
  }
}

var final = [];

for (var i = low ; i < high ; i++) {
  if (!arr.includes(i)) {
    final.push(i)
  }
}

return final
}

console.log(missing(input))
console.log(missing(input2))
console.log(missing(input3))
console.log(missing(input4))