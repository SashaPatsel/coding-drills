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

