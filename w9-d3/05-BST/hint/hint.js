var BST = function(data) {

  this.data = data;

  this.left = null;
  this.right = null;

  this.insert = function(data) {
    // This function can meet is ends with just four conditions.
    // 1. Check to see if data is greater than this.data AND if there is a node on the left. If there is a node on the left, run this same function but for the node on the left, passing in the same argument.
    // 2. If data is smaller than this.data, but there isnt already a Node on the left, insert the node there.
    // Repeat the above steps but for the right side

  }

}
// TESTS
var tree = new BST(10);

tree.insert(5);
tree.insert(15);
tree.insert(20);
tree.insert(0);
tree.insert(-5);
tree.insert(3);

var three = tree.left.left.right;

console.log(three)