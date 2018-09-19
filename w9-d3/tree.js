// 01
var Node = function (data) {
  this.data = data
  this.children = []
}

var Tree = function () {
  this.root = null

  this.add = function(node, data) {
    node.children.push(new Node(data))
  }

  this.remove = function(node, data) {
    node.children.filter(function(child) {
      return child.data !== data
    })
  }


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
  // 03
  this.depth = function (func) {
    // Initialize empty array
    var arr = [this.root]
    while (arr.length) {
      var node = arr.shift()

      for (var i = 0; i < node.children.length; i++) {
        // Instead of sending the child-nodes to the back of the array, searching them last, now we're sending the, to the front, checking them earleir.
        arr.unshift(node.children[i])
      }
      func(node)
    }
  }
}
function t1() {
var letters = [];
var t = new Tree();
t.root = new Node('a');
t.add(t.root, 'b');
t.add(t.root, 'c');
t.add(t.root.children[0], 'd');
t.add(t.root.children[0], 'e');
t.add(t.root.children[1], 'f');

t.breadth(function(node) {
  letters.push(node.data);
});

console.log(letters)
}

function t2() {
  var letters = [];
  var t = new Tree();
  t.root = new Node('a');
  t.add(t.root, 'b');
  t.add(t.root, 'c');
  t.add(t.root.children[0], 'd');
  t.add(t.root.children[0], 'e');
  t.add(t.root.children[1], 'f');
  t.depth(node => {
    letters.push(node.data);
  });
  
  console.log(letters) // should be [ 'a', 'c', 'b', 'd' ]
}

t1()
t2()


// ===========================================================

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



function branchWidth(root) {
  // Initialize an array with the root node and a string we can use later as a condition check
  var arr = [root, "stop"]
  // What we'll return
  var widths = [0]

  while(arr.length > 1) {
    // Grab the first value in arr
    var node = arr.shift()
    // If Stop is the first value in arr
    if(node === "stop") {
      // re-initialize widths with 0
      widths.push(0)
      // Add another stop for condition checks
      arr.push("stop")
      // When the first value in arr is NOT "stop"
    } else {

      for (var i = 0 ; i < node.children.length ; i++) {
        // Send every child node to arr
        arr.push(node.children[i]) 
      }
      // Increment the lates value we're working on in widths. This stops getting added to when we hit "stop"
      widths[widths.length -1] ++
    }
  }

  return widths
}



var root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

console.log(branchWidth(root))