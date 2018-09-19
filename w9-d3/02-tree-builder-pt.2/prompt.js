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