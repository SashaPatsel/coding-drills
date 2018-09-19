var Node = function(data) {
  this.data = data;

  this.left = null;
  this.right = null;

  this.insert = function(data) {
    // If our value is smaller than the current node, and there is a value on the left, we'll call this function on the left node.
    if (data < this.data && this.left) {
      this.left.insert(data)
    } else if (data < this.data) {
      this.left = new Node(data)
    } else if (data > this.data && this.right) {
      this.right.insert(data)
    } else if(data > this.data) {
      this.right = new Node(data)
    }
  }
}


var node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(0);
node.insert(-5);
node.insert(3);

var three = node.left.left.right;

console.log(three)