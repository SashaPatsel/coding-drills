// YOUR WORK HERE



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