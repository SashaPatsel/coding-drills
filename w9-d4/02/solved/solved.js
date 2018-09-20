var Node = function(data) {
  this.data = data;

  this.left = null;
  this.right = null;
}


var BST = function(root) {

  this.root = root

  this.insert = function(node) {
    // Keep track of original node
    var insert = node
    // initialize first node to check against as the root node
    node = this.root
    // Keep going until we find somewhere to insert
    while (node) {
      // If it should go to the left...
      if (node.left && insert.data < node.data) {
        node = node.left
      // If it should go to the right... 
      } else if (node.right && insert.data > node.data) {
        node = node.right
      } else if (!node.left && insert.data < node.data) {
        node.left = insert
        node = null
      } else if (!node.right && insert.data > node.data) {
        node.right = insert
        node = null
      }
    }
  }

  this.search = function(node) {
    
    var find = node
    node = this.root

    while (node) {
     
      if(find === node.data) {
        return node
      } else if (find < node.data) {
        node = node.left
      // If it should go to the right... 
      } else if (find > node.data) {
        node = node.right
      } 
    }

    if (!node) {
      return null
    }
  }

  this.validate = function() {
    var max = this.root.data
    var min = this.root.data
    var node = this.root
    while (min || max) {

      if (node.data > max) {
        return "invalid"
      } else if (node.data < min) {
        return "invalid" 
      }

      if (node.left) {
        max = node.left.data
        node = node.left
        
      }
    }
    
  }
}

var tree = new BST(new Node(10));

tree.insert(new Node(5));
tree.insert(new Node(15));
tree.insert(new Node(20));
tree.insert(new Node(0));
tree.insert(new Node(-5));
tree.insert(new Node(3));

var three = tree.root.left.left.right;

console.log(three)
console.log(tree.search(0))

console.log(tree.search(220))