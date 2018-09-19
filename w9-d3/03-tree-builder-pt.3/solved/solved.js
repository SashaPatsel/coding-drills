
var Node = function (data) {
  this.data = data
  this.children = []

  this.add = function (data) {
    this.children.push(new Node(data))
  }

  this.remove = function (data) {
    // Returns a the children array but without node's whose data === data.
    this.children.filter(function (node) {
      return node.data !== data
    })
  }
}

var Tree = function () {
  this.root = null

  this.breadth = function (func) {
    // Initialize empty array
    var arr = [this.root]
    // while there is content inside of arr...
    while (arr.length) {
      // initialize node to the first element in arr
      var node = arr.shift()
      for (var i = 0; i < node.children.length; i++) {
        // send all the children of a given node to arr.
        arr.push(node.children[i])
      }
      //You can now search through all the nodes in the tree 
      func(node)

    }
  }

  this.depth = function (func) {
    // Initialize empty array
    var arr = [this.root]
    while (arr.length) {
      var node = arr.shift()

      for (var i = 0; i < node.children.length; i++) {
        // Instead of sending the child-nodes to the back of the array, searching them last, now we're sending the, to the front, checking them earlier.
        arr.unshift(node.children[i])
      }

      //You can now search through all the nodes in the tree 
      func(node)
    }
  }
}

var letters = [];
var t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');

t.depth(node => {
  letters.push(node.data);
});

console.log(letters) // should be [ 'a', 'c', 'b', 'd' ]