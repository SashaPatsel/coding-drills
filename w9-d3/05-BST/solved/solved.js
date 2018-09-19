var BST = function(data) {

  this.data = data;

  this.left = null;
  this.right = null;


  this.insert = function(data) {
    // If our value is smaller than the current node, and there is a value on the left, we'll call this function on the left node.
    if (data < this.data && this.left) {
      this.left.insert(data)
      // Assign this as the left node if there isn't already one.
    } else if (data < this.data) {
      this.left = new Node(data)
      // We repeat the above process on the right.
    } else if (data > this.data && this.right) {
      this.right.insert(data)
    } else if(data > this.data) {
      this.right = new Node(data)
    }
  }
}

var tree = new BST(10);

tree.insert(5);
tree.insert(15);
tree.insert(20);
tree.insert(0);
tree.insert(-5);
tree.insert(3);

var three = tree.left.left.right;

console.log(three)