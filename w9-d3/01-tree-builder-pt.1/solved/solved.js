var Node = function (data) {
  // Initialize data to what is passed to the node constructor
  this.data = data
  // Will keep track of all the child nodes
  this.children = []

  this.add = function (data) {
    // Push a newly initialized node to the children array
    this.children.push(new Node(data))
  }

  this.remove = function (data) {
    // Returns the children array, but without node's whose data === data.
    this.children.filter(function (node) {
      return node.data !== data
    })
  }
}