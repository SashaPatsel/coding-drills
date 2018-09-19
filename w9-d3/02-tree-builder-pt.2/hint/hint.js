var Node = function (data) {
  this.data = data
  this.children = []

  this.add = function (data) {
    this.children.push(new Node(data))
  }

  this.remove = function (data) {
    this.children.filter(function (node) {
      return node.data !== data
    })
  }
}

// YOUR WORK HERE

var Tree = function () {
  this.root;

  // There are a lot of ways to think about this problem. Rememeber, we want to iterate through all of the children of a given node, and only when all of those nodes have been iterated through do we want to move on to the grandchildren.

  this.breadth = function (func) {
    // Initialize an array which contains only this.root

    // Create a loop that lasts as long as the array we just created has a length greater than 0.

      // create a variable that returns and removes the first element of the array we created.

      // Create a loop that iterates through all  the children of the variable we created in the last step

      // Send each child to to the array we created.

      // Invoke the callback "func" on each node (what the variable we created points to)
  }


}





// TESTS

const arr = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');
t.root.children[0].add('e');
t.root.children[1].add('f');

t.breadth(function(node) {
  letters.push(node.data);
});

console.log(letters)